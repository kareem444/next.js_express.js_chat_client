import AxiosInstance from "../../helper/AxiosInstance";

export const DeleteFreindRequest = (id) => {
    return async dispatch => {
        try {
            AxiosInstance
                .get(`/user/deletefriendrequest/${id}`)
                .then(res => console.log(res))
                .catch(err => console.error(err));
        } catch (e) { }
    };
};