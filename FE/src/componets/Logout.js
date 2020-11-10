import React,{useContext} from 'react'
import UserContext from '../UserContext/UserContext'
const Logout=({history})=> {
    let {dispatch} = useContext(UserContext)
    const loggingOut = ()=>{
        const userDet={
            UserEmail:'',
            Password:'',
            isLoggedIn:false
        }
        dispatch({type: 'LOGOUT',userDet})
        history.push('/')
    }
    return (
        <div>
        <div>Logout</div>
        {loggingOut()}
        </div>
    )
}

export default Logout;