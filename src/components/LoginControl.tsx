import React from "react";
import {useState} from 'react'


const LoginControl = () => {
const [isLoggedIn,setIsLoggedIn] = useState(false);
const handleLoginClick=()=>{
        setIsLoggedIn(true);
};
const handleLogoutClick=()=>{
        setIsLoggedIn(false);
}
    let button;
    if(isLoggedIn){
        button = <LogoutButton onClick ={handleLogoutClick} />
    }
    else{
        button = <LoginButton onClick ={handleLoginClick} />
    }
    return(
        <div>{button}</div>
    )
}

function LoginButton(props:any){
    return(
        <button onClick ={props.onClick}>Login</button>
    )
}
function LogoutButton(props:any){
    return(
        <button onClick ={props.onClick}>Logout</button>
    )
}


export default LoginControl