import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">15_React_Router-Router_setup</a>
                </div>
                <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">User</a></li>
                </ul>
            </div>
        </nav>
    );
};