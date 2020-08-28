const editUserReducer = (state = [], action) => {
    switch (action.type) {
        case 'START_EDIT_USER':
            const newState = [];
            newState.push(action.data);
            return newState;
        case 'CANCEL_EDIT_USER':
            return [];
        default:
            return state;
    }
}

export default editUserReducer;