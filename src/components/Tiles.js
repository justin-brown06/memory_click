import React from "react";
import styles from "./Game/index.css";

function Tile(props) {

    return (
    <div onClick={() => props.handleImgClick(props.id)} className="col-10 col-md-3 col-lg-3 d-flex justify-content-center shake" alt={styles}>
        <div className="col tile">
        <img src={props.image} alt=""/>
        </div>
    </div>
    )
};

export default Tile;