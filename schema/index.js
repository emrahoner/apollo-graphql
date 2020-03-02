const { gql } = require('apollo-server')

const schema = gql`
    type Book {
        title: String,
        author: Author
    }

    type Author {
        name: String,
        books: [Book]
    }

    type Query {
        books: [Book]
    }
`

module.exports = schema