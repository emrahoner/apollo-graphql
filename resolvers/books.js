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
        author.books.push(current.title)
    } else {
        prev.push({
            name: current.author,
            books: [current.title]
        })
    }
    return prev
}, [])

module.exports = {
    getBooks,
    getAuthors
}