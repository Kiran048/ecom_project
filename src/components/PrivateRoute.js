import React, {useState} from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function PrivateRoute(props) {
    const [ isLoggedin, setIsLoggedIn ]=useState(localStorage.getItem("loggedin"));
    return (
        <div>
            {props.children}
            {isLoggedin === null && <Redirect to="/Login" />}
        </div>
    )
}
