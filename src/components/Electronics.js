import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function Electronics() {
    return(

   
    <div className="mt-5">
        <h1>Electronics</h1>
        <p>this is Electronics page</p>
        <Redirect to="/Login" />
    </div> 
    );
}