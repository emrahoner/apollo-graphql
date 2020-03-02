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

    input AddBookParams {
        "Title of the book"
        title: String,
        "Author of the book"
        author: String
    }

    type Query {
        getBooks: [Book],
        getAuthors: [Author]
        scalarTypes: [ScalarTypes]
    }

    type Mutation {
        addBook(title: String, author: String): Book,
        addBookByObject(book: AddBookParams): Book
    }
`

module.exports = schema