import { GET_FRIENDS, SET_NEW_FRIEND_REQUEST_MODAL } from "../actions/type";

const INITIAL_STATE = {
    loading: false,
    friends: [],
};

const Friends = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_FRIENDS:
            return { ...state, loading: false, friends: action.friends }
        case SET_NEW_FRIEND_REQUEST_MODAL:
            return { ...state, friends: [...state.friends, action.data] }
        default:
            return state
    }
}

export default Friends