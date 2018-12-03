import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <a className="navbar-brand" href="localhost:3000">Memory Click!</a>
            {/* //! Will use for different theme choices
             <div className="collapse navbar-collapse" id="navbarText">
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="localhost:3000">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div> */}
            <span className="navbar-text">
                Score: {props.score} | High-Score: {props.topScore}
            </span>
        </nav>
    );
}

export default Navbar;