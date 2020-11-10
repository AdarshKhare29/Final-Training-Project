import React,{useContext,useState,useEffect} from 'react';
import * as userApi from '../api/user'

import UserContext from '../UserContext/UserContext'
const MainNavbar = ({history}) => {

    const [errorMsg,setErrorMsg] = useState()
    let {dispatch} = useContext(UserContext)

    let [credentials, setCredentials] = useState({})
    const handleChangeEvent = (e, field) => {
        let fieldValue = e.target.value
        setCredentials({ ...credentials, [field]: fieldValue })
    }
    const handleSubmitEvent = e => {
        e.preventDefault()
        const userDet = {
            isLoggedIn:true
        }
        userApi.doLogin(credentials)
            .then(response => response.data)
            .then(data => {
                let { token } = data
                sessionStorage.setItem('authToken', token)
                history.push("/BusBooking")
            })
            dispatch({type:"LOGIN",userDet})
    }
    useEffect(()=>{

    },[errorMsg])

    const renderError=()=>{
        if(errorMsg){
            return <div className="errorMsg">{errorMsg}</div>
        }
    }

    return (<>
    
                <nav className="navbar">

                    <a href="#home">Home</a>
                    <a href="#news">Contact</a>
                    <a href="#contact">About</a>
                    <form className="log" onSubmit={e => handleSubmitEvent(e)}>
                    {renderError()}
                        <label htmlFor="email">Email :</label>
                        <input type="text" name="email" placeholder="email" onChange={e => handleChangeEvent(e, 'email')} required/>
                        <label htmlFor="password">Password :</label>
                        <input type="password" name="password" placeholder="Password" onChange={e => handleChangeEvent(e, 'password')} required/>
                        <button className="logIn-btn">Log in</button>
                       
                    </form>
                </nav>
        </>
    )
}

export default MainNavbar;