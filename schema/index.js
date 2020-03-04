const { gql } = require('apollo-server')

const schema = gql`
    interface MutationResponse {
        code: String!
        success: Boolean!
        message: String!
    }

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

    type UpdateAuthorResponse implements MutationResponse {
        code: String!
        success: Boolean!
        message: String!
        book: Book
    }

    enum BookType {
        CLASSICS,
        HORROR,
        FICTION,
        SHORT_STORIES
    }

    """
    This is the input type for addBookByObject mutation
    This has properties for title and author
    """
    input AddBookParams {
        "Title of the book"
        title: String,
        "Author of the book"
        author: String
    }

    input UpdateAuthorParams {
        "Title of the book"
        title: String,
        "Correct author of the book"
        author: String
    }

    type Query {
        getBooks: [Book],
        getAuthors: [Author]
        scalarTypes: [ScalarTypes]
    }

    type Mutation {
        addBook(title: String, author: String): Book,
        addBookByObject(
            "Book object that has title and author properties"
            book: AddBookParams
        ): Book,
        updateAuthor(request: UpdateAuthorParams): UpdateAuthorResponse
    }
`

module.exports = schema