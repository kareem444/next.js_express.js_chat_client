import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Loginaction } from "../../redux/actions/auth/LoginAction";
import CircularProgress from "@material-ui/core/CircularProgress";

function Login({ setAuth, setRegisterPage }) {
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        if (auth.isAuth) {
            setAuth(true);
        }
    }, [auth.isAuth]);

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => dispatch(Loginaction(data));

    return (
        <div className="container">
            <form
                className="col-lg-6 col-12 m-auto shadow-lg py-3 px-4 form_linear"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-center text-black-50 mb-5 mt-2">Sign in</h1>
                <div className="mb-3 ">
                    <label className="col-3 text-white lable_auth">Email</label>
                    <input
                        type="email"
                        className="col-9 input_auth"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <div className="text-center mt-2">
                            <span className="text-danger">This field is required</span>
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <div className="mb-3">
                        <label className="col-3 text-white lable_auth">Password</label>
                        <input
                            type="password"
                            className="col-9 input_auth"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <div className="text-center mt-2">
                                <span className="text-danger">This field is required</span>
                            </div>
                        )}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 my-2">
                    {auth.loading ? (
                        <CircularProgress color="secondary" size={30} color="white" />
                    ) : (
                        "Submit"
                    )}
                </button>
                <div className="ms-1 my-2 text-center">
                    <span className=" text-white">or </span>
                    <span
                        className="ms-1 span_register text-black-50"
                        onClick={() => {
                            setRegisterPage(true);
                        }}
                    >
                        Register
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
