const { getAuthors, getBooks } = require('./books')
const scalarTypes = require('./scalarTypes')

// Resolvers define how a query fetches data from its source. Here you can connect any data source. Even you can call API.
const resolvers = {
    Query: {
        getAuthors,
        getBooks,
        scalarTypes
    }
}

module.exports = resolvers