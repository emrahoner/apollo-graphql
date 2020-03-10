const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers')
const typeDefs = require('./schema')
const schemaDirectives = require('./directives')

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    schemaDirectives,
    context: ({ req }) => ({
        token: req.headers.authorization
    }),
    tracing: true
})

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`)
})