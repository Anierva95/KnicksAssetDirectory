import React from 'react';
import './App.css';
import Header from '../components/Header/header'
import Table from '../components/Table/table'

function App() {

  const style ={
    marginTop: "10px",
    marginBottom: "18px"
  }
  return (
    <div className="App">
        <Header
        />
        <div className="nameSearch">
        <h1>Search by Name: </h1>
        <input 
        style={style}
        />
        </div>
        <body>
        </body>
        <Table
        />


    </div>
  );
}

export default App;
