import React from "react";
import Greeting from "./function/Greeting";
import Clock from "./function/Clock";
import Background from "./function/Background";
import ToDo from "./function/Todo";
import Weather from "./function/Weather";
import "./App.css";

const App = () => {
  return(
    <div>
      <Background/>
      <Clock/>
      <Greeting/>
      <ToDo/>
      <Weather/>
    </div>
  );
};

export default App;