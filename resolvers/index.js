const books = require('./books')

// Resolvers define how a query fetches data from its source. Here you can connect any data source. Even you can call API.
const resolvers = {
    Query: {
        books
    }
}

module.exports = resolvers