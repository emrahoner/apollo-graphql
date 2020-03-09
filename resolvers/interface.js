const GenericBook = {
    __resolveType (obj, context, info) {
        if (obj.whoIsMurderer) {
            return 'ThrillerBook'
        }
        if (obj.mostWeirdCharacter) {
            return 'SciFiBook'
        }
    }
}

// We don't need fragments to fetch properties of interface
// To be able to fetch subtype specific properties,
// we need to specify fragments in the query
const getGenericBook = (_,{ type }) => {
    if(type === 'thriller') {
        return {
            title: 'The silence of the lambs',
            author: 'Thomas Harris',
            whoIsMurderer: 'Hannibal Lecter'
        }
    } else if (type === 'scifi') {
        return {
            title: 'The hunger games',
            author: 'Suzanne Collins',
            mostWeirdCharacter: 'Couldnt find'
        }
    }
}

module.exports = {
    GenericBook,
    getGenericBook
}