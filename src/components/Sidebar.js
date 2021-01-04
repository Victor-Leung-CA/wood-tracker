import React from 'react';
import "./css/Sidebar.css"
import { NavLink } from 'react-router-dom';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <h3 className="sidebarTitle" >UBC AeroDesign</h3>
            
            <NavLink
                exact
                activeClassName="active"
                className="navbarLink"
                to="/"
            >
                <p>
                    <BsFillHouseDoorFill className="sidebarIcon"/>
                        Home
                </p>
            </NavLink>

            <NavLink
                exact
                activeClassName="active"
                className="navbarLink"
                to="/wood-selection"
            >
                <p>
                    <BsPlus className="sidebarIcon"/>
                    Add wood selection
                </p>
            </NavLink>
        </nav>
    );
}

export default Sidebar;