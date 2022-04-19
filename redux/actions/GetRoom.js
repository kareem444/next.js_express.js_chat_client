import AxiosInstance from "../../helper/AxiosInstance";
import {
    ERROR_NOT_ALLOWED_TO_GET_THE_ROOM,
    GET_ROOM_MESSAGES_AND_INFORMATION,
    REMOVE_ROOM_INFORMATION,
} from "./type";

export const getRoom = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: REMOVE_ROOM_INFORMATION,
            });
            AxiosInstance.get(`/room/${id}`)
                .then((res) => {
                    console.log(res);
                    const data = res.data;
                    dispatch({
                        type: GET_ROOM_MESSAGES_AND_INFORMATION,
                        data,
                    });
                })
                .catch((err) => {
                    dispatch({
                        type: ERROR_NOT_ALLOWED_TO_GET_THE_ROOM,
                    });
                });
        } catch (e) { }
    };
};
