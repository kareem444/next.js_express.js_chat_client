import AxiosInstance from "../../helper/AxiosInstance";

export const MakeWink = (id) => {
    return async dispatch => {
        try {
            AxiosInstance
                .get(`/user/wink/${id}`)
                .then(res => {})
                .catch(err => console.error(err));
        } catch (e) { }
    };
};