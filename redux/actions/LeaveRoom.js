import AxiosInstance from "../../helper/AxiosInstance";

export const LeaveRoom = (roomId) => {
    return async dispatch => {
        try {
            AxiosInstance
                .get(`/room/${roomId}/leave`)
                .then(res => {
                    {}
                } )
                .catch(err => console.error(err));
        } catch (e) { }
    };
};