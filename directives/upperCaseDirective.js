const { SchemaDirectiveVisitor } = require('apollo-server')
const { defaultFieldResolver } = require('graphql')

// https://www.apollographql.com/docs/apollo-server/schema/creating-directives/
// Above site can be revisited for directives. It is broader topic to learn.

// Directives are interceptors for the graphql
// Below example is for field directives to convert the string to uppercase

// Object type directive
// All fields of the object can be accessed and new field can be added to the object

// Directives can assert validations for the query and mutations

// Directives can stop execution with exceptions for any reason(unauthorized access or business reasons)

// By overriding static getDirectiveDeclaration method, a directive can be returned to enforce it for the whole schema or
// exception can be thrown to force developers to set the directive for every field or object.

class UpperCaseDirective extends SchemaDirectiveVisitor {
    // First argument is field details and second argument is type details
    // In field details; there are details about name, description, type etc.
    // In type details, there is only object type and 
    // arg2.objectType.getFields() returns all the fields of the object type.
    // this.args stores arguments passed to directive
    visitFieldDefinition(field) {
        const {resolve = defaultFieldResolver } = field
        // Arguments for resolve are source, arguments, context and info
        // Somehow, additional information can be passed to context
        field.resolve = async function(...args) {
            const result = await resolve.apply(this, args)
            if(typeof result === 'string') {
                return result.toUpperCase()
            }
            return result
        }
    }
}

module.exports = UpperCaseDirective