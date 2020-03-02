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

module.exports = {
    getBooks,
    getAuthors,
    addBook,
    addBookByObject
}