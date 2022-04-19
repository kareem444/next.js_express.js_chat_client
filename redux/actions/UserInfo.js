import AxiosInstance from "../../helper/AxiosInstance";
import {
    GET_FREINDSREQUESTS,
    GET_FRIENDS,
    GET_ROOMS,
    GET_USER,
    GRT_USERINFORMATIONLOADING,
    GET_MY_SENT_FRIEND_REQUEST,
    GET_WINKS_COUNT,
    GET_TODAY_WINKS_COUNT
} from "./type";

export const UserInfo = () => {
    return async (dispatch) => {
        try {
            AxiosInstance.get("/user")
                .then((res) => { 
                    if (res.data) {
                        const user = res.data.data.user;
                        const rooms = res.data.data.rooms;
                        const friends = res.data.data.friends;
                        const friend_requests = res.data.data.friend_requests;
                        const friend_requests_count = res.data.data.friend_requests_count;
                        const my_sent_friend_request = res.data.data.my_sent_friend_requests;
                        const winks_count = res.data.data.user.winks.winkCount;
                        const today_winks_count = res.data.data.user.winks.todayWinksCount; 
                        if (user) {
                            dispatch({
                                type: GET_USER,
                                user,
                            });
                        }
                        if (rooms) {
                            dispatch({
                                type: GET_ROOMS,
                                rooms,
                            });
                        }
                        if (friends) {
                            dispatch({
                                type: GET_FRIENDS,
                                friends,
                            });
                        }
                        if (friend_requests && friend_requests_count > 0) {
                            dispatch({
                                type: GET_FREINDSREQUESTS,
                                friend_requests,
                                friend_requests_count,
                            });
                            dispatch({
                                type: GRT_USERINFORMATIONLOADING,
                            });
                        }
                        if (my_sent_friend_request) {
                            dispatch({
                                type: GET_MY_SENT_FRIEND_REQUEST,
                                my_sent_friend_request
                            });
                        }
                        if (winks_count > 0) {
                            dispatch({
                                type: GET_WINKS_COUNT,
                                winks_count
                            });
                        }
                        if (today_winks_count > 0) {
                            dispatch({
                                type: GET_TODAY_WINKS_COUNT,
                                today_winks_count
                            });
                        }
                    }
                })
                .catch((err) => console.error(err));
        } catch (e) { }
    };
};
