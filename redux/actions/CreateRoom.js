import AxiosInstance from "../../helper/AxiosInstance";

export const CreateRoom = (id) => {
    return async dispatch => {
        try {
            AxiosInstance
                .get(`room/create/${id}`)
                .then(res => console.log(res) )
                .catch(err => console.error(err));
        } catch (e) { }
    };
};