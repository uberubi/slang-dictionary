const Term = require("../../models/Term");
const checkAuth = require("../../utils/check-auth");
const { AuthenticationError, UserInputError } = require("apollo-server");
const { paginateResults } = require("../../utils/paginate-results");

module.exports = {
  Query: {
    async getTerms(_, { pageSize = 5, after }, { dataSources })  {
      const allTerms = await Term.find().sort();
      // we want these in reverse chronological order
      // allTerms.reverse();
      const terms = paginateResults({
        after,
        pageSize,
        results: allTerms
      });
      // console.log(typeof after, after)
      return {
        getTerms: terms,
        cursor: terms.length ? terms[terms.length - 1].cursor : null,
        // if the cursor at the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: terms.length
          ? terms[terms.length - 1].cursor !==
            allTerms[allTerms.length - 1].cursor
          : false
      };
    },
    // async getTerms() {
    //   try {
    //     const terms = await Term.find().sort({ createdAt: 1 })
    //     return terms;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

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
        createdAt: `${Date.now()}`,
        cursor: `${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`,
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
