import React, { Component } from "react";
import Navbar from "../Navbar"
import Tile from "../Tiles"
import data from "../../data.json"

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0
    };

    handleImgClick = id => {
        this.setState({ score: this.state.score + 1 });
    }

    render() {
        const { data, score, topScore } = this.state;
        return (
            <div>
                <Navbar score={score} topScore={topScore} />
                {data.map(item =>
                    <Tile
                        handleImgClick={this.handleImgClick}
                        key={item.id} {...item}
                    />
                )}
            </div>
        )
    }
}

export default Game;