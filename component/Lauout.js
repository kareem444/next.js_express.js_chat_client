import React from 'react';
import Navbar from './navbar/Navbar';

function Lauout({children , setAuth}) {
    return (
        <div className="col-lg-10 m-auto">
            <Navbar setAuth={setAuth}/>
            {children}
        </div>
    );
}

export default Lauout;