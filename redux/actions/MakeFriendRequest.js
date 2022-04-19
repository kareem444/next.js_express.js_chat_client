import AxiosInstance from "../../helper/AxiosInstance";
import { GET_MY_NEW_SENT_FRIEND_REQUEST } from "./type";

export const MakeFriendRequest = (id) => {
    return async dispatch => {
        try {
            AxiosInstance
                .get(`/user/makefriendrequest/${id}`)
                .then(res => {
                    dispatch({
                        type: GET_MY_NEW_SENT_FRIEND_REQUEST,
                        data: res.data.sentRequestUser
                    })
                })
                .catch(err => console.error(err));
        } catch (e) { }
    };
};