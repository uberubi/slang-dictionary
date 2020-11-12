const Term = require("../../models/Term");
const checkAuth = require("../../utils/check-auth");
const { AuthenticationError, UserInputError } = require("apollo-server");
const { paginateResults } = require("../../utils/paginate-results");
const { shuffle } = require("../../utils/shuffle");
const { randomCursorGenerator } = require("../../utils/random-cursor-generator");

module.exports = {
  Query: {
    async getTerms(_, { pageSize = 5, after }) {
      const allTerms = await Term.find().sort({ createdAt: -1 });
      // const shuffledAllTerms = shuffle(allTerms)
      const terms = paginateResults({
        after,
        pageSize,
        results: allTerms,
        // results: shuffledAllTerms,
      });
      return {
        getTerms: terms,
        cursor: terms.length ? terms[terms.length - 1].cursor : null,
        // if the cursor at the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: terms.length
          ? terms[terms.length - 1].cursor !==
            allTerms[allTerms.length - 1].cursor
          : false,
      };
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
    async getAllTermsByUser(_, { username }) {
      try {
        const userTerms = await Term.find({ username: `${username}` });
        if (userTerms) {
          return userTerms;
        } else {
          throw new Error("User not found");
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
        cursor: randomCursorGenerator(),
        likes: []
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
    async likeTerm(_, { termId }, context) {
      const { username } = checkAuth(context);

      const term = await Term.findById(termId);
      if (term) {
        if (term.likes.find((like) => like.username === username)) {
          // Term already likes, unlike it
          term.likes = term.likes.filter((like) => like.username !== username);
          await term.save();
        } else {
          // Not liked, like term
          term.likes.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        await term.save();
        return term;
      } else {
        throw new UserInputError();
      }
    },
  },
};
