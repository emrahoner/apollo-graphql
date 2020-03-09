// Union types should be resolved to a type
const FlyingCar = {
    __resolveType (obj, context, info) {
        if(obj.wingWidth) {
            return 'Plane'
        }
        if(obj.wheelCount) {
            return 'Car'
        }
        return null
    }
}

// In the query, union type needs ... on <Type> { fields }
// and when type cannot be resolved, it throws exception
const getFlyingCar = (_, { request }) => {
    return request
}

module.exports = {
    FlyingCar,
    getFlyingCar
}