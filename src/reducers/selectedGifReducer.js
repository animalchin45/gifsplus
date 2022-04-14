const selectedGifReducer = (state = [], action) => {
    switch (action.type) {
        case 'SELECT_GIF':
            return action.payload
        case 'DESELECT_GIF':
            return state = []
        default:
            return state
    }
}

export default selectedGifReducer