const openModalReducer = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return !state
        default:
            return state
    }
}

export default openModalReducer