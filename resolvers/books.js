const data = require('../data/static')

const getBooks = () => data.books.map(x => { 
    return { 
        title: x.title, 
        author: {
            name: x.author,
            books: data.books.filter(y => y.author === x.author).map(y => y.title)
        }
    } 
})

const getAuthors = () => data.books.reduce((prev, current, index) => {
    let author = prev.find(x => x.name === current.author)
    if(author) {
        author.books.push({
            title: current.title
        })
    } else {
        prev.push({
            name: current.author,
            books: [{
                title: current.title
            }]
        })
    }
    return prev
}, [])

const addBook = (_, { title, author }) => {
    data.books.push({
        title: title,
        author: author
    })

    return { 
        title: title, 
        author: {
            name: author,
            books: data.books.filter(x => x.author === author).map(x => x.title)
        }
    } 
}

const addBookByObject = (_, { book }) => {
    const title = book.title
    const author = book.author

    data.books.push({
        title: title,
        author: author
    })

    return { 
        title: title, 
        author: {
            name: author,
            books: data.books.filter(x => x.author === author).map(x => x.title)
        }
    }
}

const updateAuthor = (_, { request }) => {
    const title = request.title
    const author = request.author

    const book = data.books.find(x => x.title === title)
    book.author = author
    
    return {
        code: '200',
        success: true,
        message: '',
        book: { 
            title: book.title, 
            author: {
                name: book.author,
                books: data.books.filter(x => x.author === author).map(x => x.title)
            }
        }
    }
}

// Resolvers can return promise
// First argument is parent resolved object. If there is nothing resolved before, it is the query object
// Second argument is the passed arguments to the query.
// Third argument is context object passed to all resolvers. It is shared data for the query and resolvers of the request
//      Context shouldn't be changed in resolvers for consistency.
//      Context factory function is set during ApolloServer initiation
// Fourth argument is info object that stores execution state of the query
const author = (parent, { name }, context) => {
    
    return {
        name
    }
}

const Author = {
    books(author, args, context, info) {
        return data.books.filter(x => x.author === author.name).map(x => { return {
            title: x.title
        }})
    }
}

const Book = {
    author(book, args, context, info) {
        return{
            name: data.books.find(x => x.title === book.title).author
        }
    }
}

module.exports = {
    getBooks,
    getAuthors,
    addBook,
    addBookByObject,
    updateAuthor,
    author,
    Author,
    Book
}