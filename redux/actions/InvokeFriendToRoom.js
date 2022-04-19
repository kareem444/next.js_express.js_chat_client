import AxiosInstance from "../../helper/AxiosInstance";

export const InvokeFriendToRoom = (roomId, friendId) => {
    return async dispatch => {
        try {
            AxiosInstance
                .get(`/room/invoke/${roomId}`, {
                    headers: {
                        friendId: friendId
                    }
                })
                .then(res => { })
                .catch(err => console.error(err));
        } catch (e) { }
    };
};