import React, { useState ,useContext} from 'react';
import UserContext from '../../UserContext/UserContext'
import * as userApi from '../../api/user'
import './registerStyle.css'


const Register = ({ history }) => {
   let {dispatch} = useContext(UserContext)
    let [user, setUser] = useState({})
    const handleChangeEvent = (e, field) => {
        let fieldValue = e.target.value
        setUser({ ...user, [field]: fieldValue })
    }
    const handleSubmitEvent = e => {

        e.preventDefault()
        const userDet={
            isSignedIn:true
        }
        userApi.doSave(user)
            .then(response => response.data)
            .then(user => {

                history.push('/Login')
            })
            dispatch({type:"SIGNUP",userDet})
    }
    return (
        
                <div className="registerForm">
                    <form onSubmit={e => handleSubmitEvent(e)}>
                        <h2 id="registerH">Create A New Account</h2>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="emailField" onChange={e => handleChangeEvent(e, 'email')} required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="passwordField" onChange={e => handleChangeEvent(e, 'password')} required/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="nameField" onChange={e => handleChangeEvent(e, 'name')}required />
                        </div>
                        <div className="form-group">
                            <label>Mobile</label>
                            <input className="mobileField" onChange={e => handleChangeEvent(e, 'mobile')} required/>
                        </div>
                        <div className="form-group">
                            <label>DOB</label>
                            <input className="dobField" onChange={e => handleChangeEvent(e, 'dob')} required/>
                        </div>
                        <div className="form-groupG">
                            <label>Gender</label> <br />
                            <input className="genderField" name="gender" type="radio" value="male" onChange={e => handleChangeEvent(e, 'gender') } /> <label id="mF">Male</label>
                            <input className="genderField" name="gender"  type="radio" value="female" onChange={e => handleChangeEvent(e, 'gender')} /><label> Female</label>
                        </div>
                        <button className="registerBtn">sign-up</button>
                        </form>
                        </div>
    );
};

export default Register;