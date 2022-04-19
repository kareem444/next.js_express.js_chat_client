import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Image from 'next/image'
import Tilt from 'react-tilt'

function AuthApp({ setAuth }) {
    const [RegisterPage, setRegisterPage] = useState(false);

    return (
        <div className="auth_container">
            <div className="auth_logo">
                <Tilt className="Tilt" options={{ max: 40 }} >
                    <div className=" Tilt-inner">
                        <Image src='/logo.png' width={120} height={120} className="rounded-circle" />
                    </div>
                </Tilt>
            </div>
            {RegisterPage ? (
                <Register setRegisterPage={setRegisterPage} setAuth={setAuth} />
            ) : (
                <Login setRegisterPage={setRegisterPage} setAuth={setAuth} />
            )}
        </div>
    );
}

export default AuthApp;