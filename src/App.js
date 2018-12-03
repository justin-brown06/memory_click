import React from 'react';
import Game from "./components/Game"
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Tile from "./components/Tiles";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Jumbotron /> */}
      <Game />;
      {/* <header className="App-header">
        <Tile />
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
};

export default App;