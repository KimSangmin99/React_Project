import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Navigation from "./components/Navigation";
import Home from "./routes/Home/Home";
import GuGuDan from "./routes/GuGuDan/GuGuDan";
import RSP from "./routes/RSP/RSP";
import TicTacToe from "./routes/TicTacToe/TicTacToe";
import WordRelay from "./routes/WordRelay/WordRelay";
import "./App.css";


export const AppContext = createContext();


function App() {
  return (
    <HashRouter>
      <Navigation />
      <div className="component">
        <Routes>
          <Route path="/" exact={true} Component={Home} />
          <Route path="/GuGuDan" Component={GuGuDan} />
          <Route path="/RSP" Component={RSP} />
          <Route path="/TicTacToe" Component={TicTacToe} />
          <Route path="/WordRelay" Component={WordRelay} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
