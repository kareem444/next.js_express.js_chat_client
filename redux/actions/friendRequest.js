import AxiosInstance from "../../helper/AxiosInstance";
import { SET_NEW_FRIEND_REQUEST_MODAL } from "./type";

export const FriendRequest = (id) => {
    return async dispatch => {
        try {
            AxiosInstance
                .post(`/user/friendrequest/${id}`)
                .then(res => {
                    dispatch({
                        type: SET_NEW_FRIEND_REQUEST_MODAL,
                        data: res.data.newFriend
                    })
                })
                .catch(err => console.error(err));
        } catch (e) { }
    };
};