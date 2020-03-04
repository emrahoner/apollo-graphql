const GraphQLJSON = require('graphql-type-json')

const updateJSON = (_, { request }) => {
    const newJSON = { ...request.json }
    newJSON.name = 'Emrah'
    newJSON.surname = 'Oner'

    return {
        oldJSON: request.json,
        newJSON
    }
}

module.exports = {
    JSON: GraphQLJSON,
    updateJSON
}