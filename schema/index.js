const { gql } = require('apollo-server')

const schema = gql`
    type ScalarTypes {
        idType: ID,
        intType: Int,
        floatType: Float,
        stringType: String,
        booleanType: Boolean
    }
    
    type Book {
        title: String,
        author: Author
    }

    type Author {
        name: String,
        books: [Book]
    }

    type Query {
        getBooks: [Book],
        getAuthors: [Author]
        scalarTypes: [ScalarTypes]
    }
`

module.exports = schema