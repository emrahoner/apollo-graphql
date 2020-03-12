const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers')
const typeDefs = require('./schema')
const schemaDirectives = require('./directives')
const someAPI = {}, dbClient = {}

// For rest data source, RESTDataSource class can be extended from 'apollo-datasource-rest' package.
// The class has methods for each http methods and rest clients can be created with extending it.
// In willSendRequest function, common logics for every request can be implemented (like setting authorization header)
// In resolveURL function, logic can be implemented to set the url for the client. (like fetching url from configuration)

// There are also datasource packages for SQL and MongoDB

// If we pass datasources to the ApolloServer constructor, we can access to the datasources from the context in resolvers.

// Data Loaders are used to batch requests in data loaders

// Redis or Memcache can be used to cache queries for performance

// By setting debug to false, stack trace from error response is removed
// AuthenticationError, ForbiddenError, UserInputError, ApolloError are the errors that we have
// formatError function can be set in ApolloServer contructor to map errors 
// rewriteError function is used to log errors in Graph Manager.
//      We can prevent logging certain errors or we mask error messages etc.

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    schemaDirectives,
    dataSources: () => {
        return {
            someAPI,
            dbClient
        }
    },
    context: ({ req }) => ({
        token: req.headers.authorization
    }),
    tracing: true,
    debug: false,
    formatError: (error) => {
        // error.originalError returns the actual error object
        return error
    },
    engine: {
        rewriteError: (error) => {
            // return null, not to log the error in Graph Manager
            return error
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`)
})