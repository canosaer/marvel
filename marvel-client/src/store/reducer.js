const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_RESULTS':
            return {
                ...state,
                results: action.payload
            }
        default:
            return state
    }
}

export default reducer