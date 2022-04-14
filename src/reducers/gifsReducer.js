const gifsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SEARCH':
            return action.payload
        case 'FETCH_TRENDING':
            return action.payload
        default:
            return state
    }
}

export default gifsReducer

// infinite scroll may need to add or subtract from state that is why trending and search are separte reducers