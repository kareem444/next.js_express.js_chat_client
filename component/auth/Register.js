import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../../redux/actions/auth/SignUp";
import CircularProgress from "@material-ui/core/CircularProgress";

function Register({ setAuth, setRegisterPage }) {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        if (auth.isAuth) {
            setAuth(true);
        }
    }, [auth.isAuth]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = (data) => {
        dispatch(SignUp(data))
        console.log(data)
    };

    return (
        <div className="container">
            <form className="col-lg-8 col-12 m-auto shadow-lg py-3 px-4 form_linear" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center mb-4 text-black-50">Register</h1>
                <div className="mb-3">
                    <label className="col-3 text-white lable_auth">Name</label>
                    <input
                        type="text"
                        className="col-9 input_auth"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <p className="text-danger text-center mt-2">This field is required</p>}
                </div>
                <div className="mb-3">
                    <label className="col-3 text-white lable_auth">Email</label>
                    <input
                        type="email"
                        className="col-9 input_auth"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <p className="text-danger text-center mt-2">This field is required</p>}
                </div>
                <div className="mb-3">
                    <label className="col-3 text-white lable_auth">Modile</label>
                    <input
                        type="number"
                        className="col-9 input_auth"
                        {...register("mobile", { required: true })}
                    />
                    {errors.mobile && <p className="text-danger text-center mt-2">This field is required</p>}
                </div>
                <div className="mb-3">
                    <div className="mb-3">
                        <label className="col-3 text-white lable_auth">Password</label>
                        <input
                            type="password"
                            className="col-9 input_auth"
                            {...register("password", {
                                required: "You must specify a password",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                }
                            })}
                        />
                        {errors.password && <p className="text-danger text-center mt-2">{errors.password.message}</p>}
                    </div>
                </div>
                <div className="mb-3">
                    <div className="mb-3">
                        <label className="col-3 text-white lable_auth">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="col-9 input_auth"
                            {...register("confirm_password", {
                                validate: value =>
                                    value === password.current || "The passwords do not match"
                            })}
                        />
                        {errors.confirm_password && <p className="text-danger text-center mt-2">{errors.confirm_password.message}</p>}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    {auth.loading ? (
                        <CircularProgress color="secondary" size={30} color="white" />
                    ) : (
                        "Submit"
                    )}
                </button>
                <div className="mt-2 ms-1">
                    <span className=" text-white">have account ? </span>
                    <span
                        className="ms-1 span_register"
                        onClick={() => {
                            setRegisterPage(false);
                        }}
                    >
                        Login
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Register;
