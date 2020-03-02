const { gql } = require('apollo-server')

const schema = gql`
    type Book {
        title: String,
        author: String
    }

    type Query {
        books: [Book]
    }
`

export default schema