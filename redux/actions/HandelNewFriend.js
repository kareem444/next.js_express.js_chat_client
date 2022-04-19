export const HandelNewFriend = (data , kk) => {
    return async dispatch => {
        try {
        dispatch({
            type:SET_NEW_FRIEND_REQUEST_MODAL,
            data
        })
        } catch (e) {}
    };
};