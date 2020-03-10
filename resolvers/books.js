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

const author = (_, { name }) => {
    return {
        name
    }
}

const Author = {
    books(author) {
        return data.books.filter(x => x.author === author.name).map(x => { return {
            title: x.title
        }})
    }
}

const Book = {
    author(book) {
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