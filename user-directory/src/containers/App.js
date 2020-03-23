import React, { useState, useContext } from 'react';
import './App.css';
import Header from '../components/Header/header'
import Table from '../components/Table/table'

function App() {

  const [playerName, updatePlayerName] = useState("");

  const inputChangeHandler = (event) => {
    updatePlayerName(event.target.value);
  }

  const style ={
    marginTop: "10px",
    marginBottom: "18px"
  }
  return (
    <div className="App">
        <Header
        />
        <div className="nameSearch">
        <h3>Search by Name: </h3>
        <input 
        style={style}
        value={playerName}
        onChange={inputChangeHandler}
        />
        </div>
        <body>
        </body>
        <Table
        playerSearch={playerName}
        />


    </div>
  );
}

export default App;
