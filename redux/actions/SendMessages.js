import AxiosInstance from "../../helper/AxiosInstance";
import { ERROR_NOT_ALLOWED_TO_GET_THE_ROOM } from "./type";

export const SendMessages = (data, roomId) => {
    return async dispatch => {
        try {
            AxiosInstance
                .post(`/room/${roomId}`, { data })
                .then(res => {
                    if (res.status !== 201) {
                        dispatch({
                            type: ERROR_NOT_ALLOWED_TO_GET_THE_ROOM
                        })
                    }
                })
                .catch(err => console.error(err));
        } catch (e) { }
    };
};