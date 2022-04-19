import {
    GET_SEARCH_FRIEND,
    HAD_WINKED_SEARCH_BEFORE,
    NO_WINKED_SEARCH_BEFORE,
    REMOVE_SEARCH_FRIEND,
} from "../actions/type";

const INITIAL_STATE = {
    searchFriend: null,
    winksCount: 0,
    showWinkButton: false,
};

const SearchFielduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SEARCH_FRIEND:
            return {
                ...state,
                searchFriend: action.data,
                winksCount: action.winksCount,
            };
        case REMOVE_SEARCH_FRIEND:
            return { ...state, searchFriend: null };
        case NO_WINKED_SEARCH_BEFORE:
            return { ...state, showWinkButton: true };
        case HAD_WINKED_SEARCH_BEFORE:
            return { ...state, showWinkButton: false };
        default:
            return state;
    }
};

export default SearchFielduser;
