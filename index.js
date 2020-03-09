const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers')
const typeDefs = require('./schema')
const schemaDirectives = require('./directives')

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    schemaDirectives
})

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`)
})