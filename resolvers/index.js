const { getAuthors, getBooks, addBook, addBookByObject, updateAuthor } = require('./books')
const scalarTypes = require('./scalarTypes')
const { JSON, updateJSON } = require('./customScalarTypes')
const { DateTimeScalar } = require('../customScalars')
const { addHoursToNow, getNow } = require('./dateTime')


// Resolvers define how a query fetches data from its source. Here you can connect any data source. Even you can call API.
const resolvers = {
    JSON,
    DateTimeScalar,
    Query: {
        getAuthors,
        getBooks,
        scalarTypes,
        getNow
    },
    Mutation: {
        addBook,
        addBookByObject,
        updateAuthor,
        updateJSON,
        addHoursToNow
    }
}

module.exports = resolvers