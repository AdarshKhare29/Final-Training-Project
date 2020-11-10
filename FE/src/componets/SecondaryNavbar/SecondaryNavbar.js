import React, { useContext, useRef } from 'react'
import UserContext from '../../UserContext/UserContext'
import { NavLink } from 'react-router-dom'
import './SecondaryNavbarStyle.css';

const SecondaryNavbar = () => {

    const loginBtn = useRef(null)
    const signupBtn = useRef(null)


    const { userDet } = useContext(UserContext)
    const renderAuthBtn = () => {
        let { isLoggedIn,isSignedIn } = userDet
        if (isLoggedIn || isSignedIn) {
            return (
                <>
                    <NavLink to="/Logout" className="signUpbtn">Log out</NavLink>
                </>
            )
        }
        else {
            return (
                <>
                    <NavLink to="/" className="login-btn" ref={loginBtn}>Log in</NavLink>
                    <NavLink to="/" className="signUpbtn" ref={signupBtn}>Sign up</NavLink>
                </>
            )
        }
    }

    



    return (<>
            <div className="content">
               
                    {renderAuthBtn()}
        
            </div>
            </>
    )
}

export default SecondaryNavbar;