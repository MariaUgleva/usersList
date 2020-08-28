const resultGetReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RESULT_TO_STATE':
            const newState = action.data;
            return newState;

        default:
            return state;
    }
}

export default resultGetReducer;