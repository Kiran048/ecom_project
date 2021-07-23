import React from  "react";
import { Link, NavLink } from "react-router-dom";
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
                <Link to='/Homeneeds' className="nav-link">
                    HOME NEEDS
                </Link>
            </li>
            <li className="nav-link">
                <Link to='/Fashion' className="nav-link">
                    FASHION
                </Link>
            </li>
            <li className="nav-link">
                <Link to='/Footwear' className="nav-link">
                    FOOTWEAR
                </Link>
            </li>
            <li className="nav-link">
                <Link to='/Sportstoys' className="nav-link">
                    SPORTS&TOYS
                </Link>
            </li>
            <li className="nav-link">
                <Link to='/Luggage' className="nav-link">
                    LUGGAGE
                </Link>
            </li>
            <li className="nav-link">
                <Link to='/Electronics' className="nav-link">
                    ELECTRONICS
                </Link>
            </li>
           
        </nav>
    )
}