import AxiosInstance from "../../helper/AxiosInstance";
import {
    GET_SEARCH_FRIEND,
    HAD_WINKED_SEARCH_BEFORE,
    NO_WINKED_SEARCH_BEFORE,
} from "./type";

export const SearchFriends = (data) => {
    return async (dispatch) => {
        try {
            AxiosInstance.post("/user/search", data)
                .then((res) => {
                    const data = res.data.profile;
                    dispatch({
                        type: GET_SEARCH_FRIEND,
                        data,
                        winksCount: res.data.winksCount,
                    });
                    if (res.data.hadWink === 0 && res.data.hadWink !== null) {
                        dispatch({
                            type: NO_WINKED_SEARCH_BEFORE,
                        });
                    } else {
                        dispatch({
                            type: HAD_WINKED_SEARCH_BEFORE,
                        });
                    }
                })
                .catch((err) => console.error(err));
        } catch (e) { }
    };
};
