import {
    GET_USER_PROFILE,
    HAD_WINKED_BEFORE,
    NO_WINKED_BEFORE,
} from "../actions/type";

const INITIAL_STATE = {
    user: [],
    winksCount: 0,
    showWinkButton: null,
};

const Profile = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_PROFILE:
            return { ...state, user: action.data, winksCount: action.winksCount };
        case HAD_WINKED_BEFORE:
            return { ...state, showWinkButton: false };
        case NO_WINKED_BEFORE:
            return { ...state, showWinkButton: true };
        default:
            return state;
    }
};

export default Profile;
