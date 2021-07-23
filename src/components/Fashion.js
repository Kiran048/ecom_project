import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function Fashion() {
    return(

   
    <div className="mt-5">
        <h1>Fashion</h1>
        <p>this is fashion page</p>
        <Redirect to="/Login" />
    </div> 
    );
}