const { gql } = require('apollo-server')
const GraphQLJSON = require('graphql-type-json')

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

    scalar JSON
    scalar DateTimeScalar

    input JSONRequest {
        json: JSON
    }

    type JSONResponse {
        oldJSON: JSON
        newJSON: JSON
    }

    type GetNowResponse {
        now: DateTimeScalar
    }

    type DateTimeResponse {
        date: DateTimeScalar
    }

    type Car {
        wheelCount: Int
        isItDoughnut: Boolean
    }

    type Plane {
        wingWidth: Int
        isChickenWing: Boolean
    }

    union FlyingCar = Car | Plane

    input FlyingCarInput {
        wheelCount: Int
        isItDoughnut: Boolean
        wingWidth: Int
        isChickenWing: Boolean
    }

    enum Colors {
        RED,
        BLUE,
        GREEN
    }

    enum MappedColor {
        RED,
        BLUE,
        GREEN
    }

    interface GenericBook {
        title: String
        author: String
    }

    type SciFiBook implements GenericBook {
        title: String
        author: String
        mostWeirdCharacter: String
    }

    type ThrillerBook implements GenericBook {
        title: String
        author: String
        whoIsMurderer: String
    }

    directive @upper on FIELD_DEFINITION

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
        getNow: GetNowResponse,
        favoriteColor: Colors,
        avatar(borderColor: Colors): Colors,
        mappedFavoriteColor: MappedColor,
        mappedAvatar(color: String): MappedColor,
        getFlyingCar(request: FlyingCarInput): FlyingCar
        getGenericBook(type: String): GenericBook
        convertToUpperCase(input: String): String @upper
    }

    type Mutation {
        addBook(title: String, author: String): Book,
        addBookByObject(
            "Book object that has title and author properties"
            book: AddBookParams
        ): Book,
        updateAuthor(request: UpdateAuthorParams): UpdateAuthorResponse,
        updateJSON(request: JSONRequest): JSONResponse,
        addHoursToNow(hours: Int): DateTimeResponse
    }
`

module.exports = schema