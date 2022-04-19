import AxiosInstance from "../../helper/AxiosInstance";

export const UnFriendUser = (id) => {
    return async dispatch => {
        try {
            AxiosInstance
                .get(`user/deletefriend/${id}`)
                .then(res => console.log(res))
                .catch(err => console.error(err));
        } catch (e) { }
    };
};