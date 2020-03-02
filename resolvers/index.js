const data = require('../data/static')

// Resolvers define how a query fetches data from its source. Here you can connect any data source. Even you can call API.
const resolvers = {
    Query: {
        books: () => data.books
    }
}

export default resolvers