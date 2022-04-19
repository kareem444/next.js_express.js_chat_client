import AxiosInstance from "../../helper/AxiosInstance";
import { GET_USER_PROFILE, HAD_WINKED_BEFORE, NO_WINKED_BEFORE } from "./type";

export const GetProfile = (id) => {
    return async (dispatch) => {
        try {
            AxiosInstance.get(`/user/profile/${id}`)
                .then((res) => {
                    dispatch({
                        type: GET_USER_PROFILE,
                        data: res.data.profile[0],
                        winksCount: res.data.winksCount,
                    });
                    if (res.data.hadWink === 0 && res.data.hadWink !== null) {
                        dispatch({
                            type: NO_WINKED_BEFORE,
                        });
                    }else {
                        dispatch({
                            type: HAD_WINKED_BEFORE,
                        });
                    }
                })
                .catch((err) => console.error(err));
        } catch (e) { }
    };
};
