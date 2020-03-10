const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers')
const typeDefs = require('./schema')
const schemaDirectives = require('./directives')

// For rest data source, RESTDataSource class can be extended from 'apollo-datasource-rest' package.
// The class has methods for each http methods and rest clients can be created with extending it.
// In willSendRequest function, common logics for every request can be implemented (like setting authorization header)
// In resolveURL function, logic can be implemented to set the url for the client. (like fetching url from configuration)

// There are also datasource packages for SQL and MongoDB

// If we pass datasources to the ApolloServer constructor, we can access to the datasources from the context in resolvers.

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
    tracing: true
})

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`)
})