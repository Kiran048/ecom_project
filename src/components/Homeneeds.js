import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function Homeneeds() {
    return(

   
    <div className="mt-5">
        <h1>Home needs</h1>
        <p>this is home needs page</p>
        <Redirect to="/Login" />
    </div> 
    );
}