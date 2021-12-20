import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Intro } from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import "animate.css/animate.min.css";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About />
      <Services />
      <Footer/>
    </div>)
     
}

export default App;
