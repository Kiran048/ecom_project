import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function Luggage() {
    return(

   
    <div className="mt-5">
        <h1>Luggage</h1>
        <p>this is Luggage page</p>
        <Redirect to="/Login" />
    </div> 
    );
}