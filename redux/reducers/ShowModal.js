import {
    HIDE_FRIEN_PROFILE_MODAL_MODAL,
    HIDE_SEARCH_MODAL,
    SHOW_FRIEN_PROFILE_MODAL_MODAL,
    SHOW_SEARCH_MODAL,
    SHOW_INVOKE_FRIEND_MODAL,
    HIDE_INVOKE_FRIEND_MODAL,
} from "../actions/type";

const INITIAL_STATE = {
    ShowSearchModal: false,
    ShowFriendProfileModal: false,
    ShowInvokeFriendModal: false,
};

const SearchModalShow = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_SEARCH_MODAL:
            return {
                ...state,
                ShowSearchModal: true,
                ShowFriendProfileModal: false,
                ShowInvokeFriendModal: false,
            };
        case SHOW_FRIEN_PROFILE_MODAL_MODAL:
            return {
                ...state,
                ShowSearchModal: false,
                ShowFriendProfileModal: true,
                ShowInvokeFriendModal: false,
            };
        case SHOW_INVOKE_FRIEND_MODAL:
            return {
                ...state,
                ShowSearchModal: false,
                ShowFriendProfileModal: false,
                ShowInvokeFriendModal: true,
            };
        case HIDE_SEARCH_MODAL:
            return {
                ...state,
                ShowSearchModal: false,
            };
        case HIDE_FRIEN_PROFILE_MODAL_MODAL:
            return {
                ...state,
                ShowFriendProfileModal: false,
            };
        case HIDE_INVOKE_FRIEND_MODAL:
            return {
                ...state,
                ShowInvokeFriendModal: false,
            };
        default:
            return state;
    }
};
export default SearchModalShow;
