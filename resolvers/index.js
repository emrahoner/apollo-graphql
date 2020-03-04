const { getAuthors, getBooks, addBook, addBookByObject, updateAuthor } = require('./books')
const scalarTypes = require('./scalarTypes')
const { JSON, updateJSON } = require('./customScalarTypes')

// Resolvers define how a query fetches data from its source. Here you can connect any data source. Even you can call API.
const resolvers = {
    JSON,
    Query: {
        getAuthors,
        getBooks,
        scalarTypes
    },
    Mutation: {
        addBook,
        addBookByObject,
        updateAuthor,
        updateJSON
    }
}

module.exports = resolvers