import React, { Component } from "react";
import Navbar from "../Navbar"
import Tile from "../Tiles"
import data from "../../data.json"
import Jumbotron from "../Jumbotron"
import Randomizer from "react-randomizer"

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0,
        clicked: []
    };

    handleImgClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) })
            console.log(this.state.clicked)
        } else {
            alert("Please try again.")
            this.handleReset();
        }
    };

    handleIncrement = () => {
        const newScore = this.state.score + 1;
        this.setState({
            score: newScore
        });
        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        };
    };

    handleReset = () => {
        this.setState({
            score: 0,
            topScore: this.state.topScore,
            clicked: []
        });
    };

    render() {
        const { data, score, topScore } = this.state;
        return (
            <div>
                <Navbar score={score} topScore={topScore} />
                <Jumbotron />
                <div className="container justify-content-center">
                    <div className="row d-flex justify-content-around">
                        {Randomizer.randomizeArray(data).slice(0, 12).map(item =>
                            <Tile
                                handleImgClick={this.handleImgClick}
                                key={item.id} {...item}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;