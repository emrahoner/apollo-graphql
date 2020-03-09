const { getAuthors, getBooks, addBook, addBookByObject, updateAuthor } = require('./books')
const scalarTypes = require('./scalarTypes')
const { JSON, updateJSON } = require('./customScalarTypes')
const { DateTimeScalar } = require('../customScalars')
const { addHoursToNow, getNow } = require('./dateTime')
const { favoriteColor, avatar, MappedColor, mappedFavoriteColor, mappedAvatar }  = require('./enum')
const { FlyingCar, getFlyingCar } = require('./union')


// Resolvers define how a query fetches data from its source. Here you can connect any data source. Even you can call API.
const resolvers = {
    JSON,
    DateTimeScalar,
    MappedColor,
    FlyingCar,
    Query: {
        getAuthors,
        getBooks,
        scalarTypes,
        getNow,
        favoriteColor,
        avatar,
        mappedFavoriteColor,
        mappedAvatar,
        getFlyingCar
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