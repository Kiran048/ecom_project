import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function Footwear() {
    return(

   
    <div className="mt-5">
        <h1>Footwear</h1>
        <p>this is Footwear page</p>
        <Redirect to="/Login" />
    </div> 
    );
}