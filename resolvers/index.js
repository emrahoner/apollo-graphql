const { getAuthors, getBooks, addBook, addBookByObject } = require('./books')
const scalarTypes = require('./scalarTypes')

// Resolvers define how a query fetches data from its source. Here you can connect any data source. Even you can call API.
const resolvers = {
    Query: {
        getAuthors,
        getBooks,
        scalarTypes
    },
    Mutation: {
        addBook,
        addBookByObject
    }
}

module.exports = resolvers