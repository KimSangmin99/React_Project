import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation/>
    </HashRouter>
  );
}

export default App;
