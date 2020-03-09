const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')

const DateTimeScalar = new GraphQLScalarType({
    name: 'DateTimeScalar',
    description: 'Custom scalar type for datetime type',
    serialize (value) {
        return value.toString()
    },
    parseValue (value) {
        return new Date(value)
    },
    parseLiteral (ast) {
        if (ast.kind === Kind.INT) {
            return parseInt(ast.value, 10)
        }
        return null
    }
})

module.exports = DateTimeScalar