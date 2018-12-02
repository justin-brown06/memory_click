import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <a className="navbar-brand" href="localhost:3000">Memory Click!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="localhost:3000">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                <span className="navbar-text">
                    Score: | High-Score:
    </span>
            </div>
        </nav>
    );
}

export default Navbar;