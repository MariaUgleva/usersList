export const resultGet = (usersCollection) => {
    return {
        type: 'ADD_RESULT_TO_STATE',
        data: usersCollection
    };
};