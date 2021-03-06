import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hook/useAuth';



import './Login.css'

const Login = () => {

    const { handleGooglesignin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    console.log(redirect_url);
    const googleLogin = () => {
        handleGooglesignin()
            .then((result) => {
                history.push(redirect_url);
            });

    }


    return (
        <div className="login-container shadow-lg rounded mt-5 mb-5">

            <h2 className=" text-dark mt-5">Google Sign In</h2>

            <button onClick={googleLogin} className=" btn btn-primary mt-3 mb-5">Sign In</button>

        </div>
    );
};

export default Login;