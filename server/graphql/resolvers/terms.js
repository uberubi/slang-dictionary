const Term = require("../../models/Term");
const checkAuth = require("../../utils/check-auth");
const { AuthenticationError, UserInputError } = require("apollo-server");

module.exports = {
  Query: {
    async getTerms() {
      try {
        const terms = await Term.find().sort({ createdAt: -1 });
        return terms;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getTerm(_, { termId }) {
      try {
        const term = await Term.findById(termId);
        if (term) {
          return term;
        } else {
          throw new Error("Term not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createTerm(_, { title, text }, context) {
      const user = checkAuth(context);

      if (title.trim() === "") {
        throw new Error("Term title must not be empty");
      }
      if (text.trim() === "") {
        throw new Error("Term text must not be empty");
      }

      const newTerm = new Term({
        title,
        text,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const term = await newTerm.save();

      // context.pubsub.publish("NEW_TERM", {
      //   newTerm: term,
      // });
      return term;
    },
    async deleteTerm(_, { termId }, context) {
      const user = checkAuth(context);

      try {
        const term = await Term.findById(termId);
        if (user.username === term.username) {
          await term.delete();
          return "Term deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
