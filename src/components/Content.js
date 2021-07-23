import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
export default function Content() {
    return(
        <div>
            <h1 style={{ margin: 300}}>welcome to Home page</h1>
            <Redirect to="/Login" />
        </div>
    );
}