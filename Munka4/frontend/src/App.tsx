import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Intro } from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
    </div>)
}

export default App;
