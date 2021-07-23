import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function Groceries() {
    return(

   
    <div className="mt-5">
        <h1>Groceries</h1>
        <p>this is Groceries page</p>
        <Redirect to="/Login" />
    </div> 
    );
}