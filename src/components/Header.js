import React from  "react";
import {  NavLink } from "react-router-dom";
export default function Header() {
    return (
        <nav className="navbar bg-dark color-primary justify-content-center">
            <li className="nav-link">
                <NavLink to='/Content' className="nav-link" activeClassName="btn btn-primary">
                    HOME
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to='/Groceries' className="nav-link" activeClassName="btn btn-primary">
                    GROCERIES
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to='/Homeneeds' className="nav-link" activeClassName="btn btn-primary">
                    HOME NEEDS
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to='/Fashion' className="nav-link" activeClassName="btn btn-primary">
                    FASHION
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to='/Footwear' className="nav-link" activeClassName="btn btn-primary">
                    FOOTWEAR
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to='/Sportstoys' className="nav-link" activeClassName="btn btn-primary">
                    SPORTS&TOYS
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to='/Luggage' className="nav-link" activeClassName="btn btn-primary">
                    LUGGAGE
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to='/Electronics' className="nav-link" activeClassName="btn btn-primary">
                    ELECTRONICS
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to='/Login' className="nav-link" activeClassName="btn btn-primary">
                    LOGIN
                </NavLink>
            </li>
           
        </nav>
    )
}