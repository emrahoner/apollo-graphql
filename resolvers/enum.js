
const favoriteColor = (_,__) => {
    return 'RED'
}

const avatar = (_, { borderColor }) => {
    return borderColor
}

// This type of enum wraps the resolver
// In the resolver function, hex values are used 
// While getting request and sending response; enum values are used
// In other words, business logic depends on hex string values,
// contracts that client knows are the enum values
const MappedColor = {
    RED: '#f00',
    GREEN: '#0f0',
    BLUE: '#00f'
}

const mappedFavoriteColor = (_,__) => {
    return '#0f0' // Response to the client is in enum value (GREEN)
}

// Request accept hex string of color as the request type is string
// If request type was MappedColor, client should send the enum value 
// and in the resolver, it is translated to hex value
const mappedAvatar = (_, { color }) => {
    console.log(color) // logs hex value of color
    return color // Response to the client is enum value
}

module.exports = {
    favoriteColor,
    avatar,
    MappedColor,
    mappedFavoriteColor,
    mappedAvatar
}