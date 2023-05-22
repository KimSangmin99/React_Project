import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/GuGuDan">GuGuDan</Link>
      <Link to="/RSP">RSP</Link>
      <Link to="/TicTacToe">TicTacToe</Link>
      <Link to="/WordRelay">WordRelay</Link>
    </div>
  );
}

export default Navigation;
