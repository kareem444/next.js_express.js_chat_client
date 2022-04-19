import {
    ERROR_NOT_ALLOWED_TO_GET_THE_ROOM,
    GET_USER,
    GRT_USERINFORMATIONLOADING,
    IS_AUTH,
    LOADING_AUTH,
} from "../actions/type";

const INITIAL_STATE = {
    loading: false,
    isAuth: false,
    user: null,
    setUserInformationLoading: true,
    allowToGetTheRoom: true
};

const Example = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_AUTH:
            return { ...state, isAuth: false, loading: true };
        case IS_AUTH:
            return { ...state, isAuth: true, loading: false };
        case GET_USER:
            return { ...state, user: action.user };
        case GRT_USERINFORMATIONLOADING:
            return { ...state, setUserInformationLoading: false };
        case ERROR_NOT_ALLOWED_TO_GET_THE_ROOM:
            return { ...state, allowToGetTheRoom: false };
        default:
            return state;
    }
};
export default Example;
