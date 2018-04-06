import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">15_React_Router-Router_setup</a>
                </div>
                <ul className="nav navbar-nav">
                <li><Link to={"/home"} activeClassName={"active"}>Home</Link></li>
                <li><Link to={"/user/10"} activeClassName={"active"}>User</Link></li>
                </ul>
            </div>
        </nav>
    );
};