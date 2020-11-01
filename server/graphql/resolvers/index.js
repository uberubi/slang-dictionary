const usersResolvers = require('./users')
const termsResolvers = require('./terms')

module.exports = {
  Query: {
    ...usersResolvers.Query,
    ...termsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...termsResolvers.Mutation
  }
}