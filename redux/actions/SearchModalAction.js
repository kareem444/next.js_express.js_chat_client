import {
    HIDE_FRIEN_PROFILE_MODAL_MODAL,
    HIDE_SEARCH_MODAL,
    SHOW_FRIEN_PROFILE_MODAL_MODAL,
    SHOW_SEARCH_MODAL,
} from "./type";

export const ShowModalAction = (
    showSearchModal,
    showFriendProfileModal
) => {
    return async (dispatch) => {
        try {
            if (showSearchModal && !showFriendProfileModal) {
                dispatch({ type: SHOW_SEARCH_MODAL });
            } else if (!showSearchModal && !showFriendProfileModal) {
                dispatch({ type: HIDE_SEARCH_MODAL });
                dispatch({ type: HIDE_FRIEN_PROFILE_MODAL_MODAL });
            } else if (!showSearchModal && showFriendProfileModal) {
                dispatch({ type: SHOW_FRIEN_PROFILE_MODAL_MODAL });
            }
        } catch (e) { }
    };
};
