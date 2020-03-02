const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers')
const schema = require('./schema')

const server = new ApolloServer({ 
    typeDefs: schema, 
    resolvers 
})

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`)
})