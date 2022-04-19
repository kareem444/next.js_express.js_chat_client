import {
    GET_FREINDSREQUESTS,
    HIDE_FRIENDS_REQUESTS_MODAL,
    MINUS_FRIEND_REQUEST_MARK,
    SHOW_FRIENDS_REQUESTS_MODAL,
    GET_MY_SENT_FRIEND_REQUEST,
    GET_MY_NEW_SENT_FRIEND_REQUEST
} from "../actions/type";

const INITIAL_STATE = {
    friendRequests: [],
    friendRequestsCount: 0,
    showFriendRequestsModal: false,
    mySentFriendRequests: []
};
const FriendsRequests = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_FREINDSREQUESTS:
            return {
                ...state,
                friendRequests: action.friend_requests,
                friendRequestsCount: action.friend_requests_count,
            };
        case SHOW_FRIENDS_REQUESTS_MODAL:
            return {
                ...state,
                showFriendRequestsModal: true,
            };
        case HIDE_FRIENDS_REQUESTS_MODAL:
            return {
                ...state,
                showFriendRequestsModal: false,
            };
        case MINUS_FRIEND_REQUEST_MARK:
            return {
                ...state,
                friendRequestsCount: state.friendRequestsCount - 1,
            };
        case GET_MY_SENT_FRIEND_REQUEST:
            return {
                ...state,
                mySentFriendRequests: action.my_sent_friend_request
            };
        case GET_MY_NEW_SENT_FRIEND_REQUEST:
            return {
                ...state,
                mySentFriendRequests: [...state.mySentFriendRequests , action.data]
            };
        default:
            return state;
    }
};

export default FriendsRequests;
