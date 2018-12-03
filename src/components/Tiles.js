import React from "react";

function Tile(props) {

    return (
    <div onClick={() => props.handleImgClick(props.id)} className="col-10 col-md-3 col-lg-3 d-flex justify-content-center">
        <img src={props.image} />
    </div>
    );
};

export default Tile;