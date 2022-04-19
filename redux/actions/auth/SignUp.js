import axios from "axios";
import { IS_AUTH, LOADING_AUTH } from "../type";
export const SignUp = (data) => {
    return async (dispatch) => {
        dispatch({ type: LOADING_AUTH });
        try {
            axios
                .post("http://localhost:3001/auth/signup", data)
                .then((res) => {
                    localStorage.setItem("access_token", res.data.token);
                    if (res.data.token) {
                        dispatch({
                            type: IS_AUTH,
                        });
                    } 
                })
                .catch((err) => console.error(err));
        } catch (e) { }
    };
};
