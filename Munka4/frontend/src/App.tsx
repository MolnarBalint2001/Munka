import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Intro } from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Footer/>
    </div>)
}

export default App;
