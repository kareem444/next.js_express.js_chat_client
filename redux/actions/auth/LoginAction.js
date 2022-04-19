import axios from "axios";
import { IS_AUTH, LOADING_AUTH } from "../type";
export const Loginaction = (data) => {
    return async (dispatch) => {
        dispatch({ type: LOADING_AUTH });
        try {
            axios
                .post("http://localhost:3001/auth/signin", data)
                .then((res) => {
                    localStorage.setItem("access_token", res.data.token);
                    if (res.data.token) {
                        dispatch({
                            type: IS_AUTH,
                        });
                    } else {
                    }
                })
                .catch((err) => console.error(err));
        } catch (e) { }
    };
};
