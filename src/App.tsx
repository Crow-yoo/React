import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import Clock from './Timer';


function App() {
  let name = "React";

  return (
    <div className="container">
        <Todolist></Todolist>
        <Clock></Clock>

    </div>
  );
}

export default App;
