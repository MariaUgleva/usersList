export const startEditUser = (userData) => {
    return {
        type: 'START_EDIT_USER',
        data: userData
    };
}

export const cancelEditUser = () => {
    return {
        type: 'CANCEL_EDIT_USER'
    }
}