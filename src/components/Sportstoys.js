import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function Sportstoys() {
    return(

   
    <div className="mt-5">
        <h1>Sports & toys</h1>
        <p>this is Sports&toys page</p>
        <Redirect to="/Login" />
    </div> 
    );
}