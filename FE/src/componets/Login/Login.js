import React from 'react';
import MainNavbar from '../MainNavbar'
import './loginStyle.css'
const Login = ({history}) => {
    return (
        <div>
           <MainNavbar history={history}/>
           <div className="signupMsg">
                <h2>Sign up successful Login to continue</h2>
           </div>
          
        </div>
    );
};

export default Login;