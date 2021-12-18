import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Routes ,Route } from "react-router-dom" 




export default function App (){


  return(
    <Router>
      <div className="App">

        <div className="title">
          Templates
        </div>

        <Routes>
          <Route path="/template1">
            <div>Hello</div>
          </Route>

          <Route path="/template2">

          </Route>

          <Route path="/template3">

          </Route>
        </Routes>
      </div>
    </Router>
    
    
  );
}