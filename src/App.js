import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Message} from "./Message.js"
import "./App.css"

function App() {
  let [isMoring,setMorning]=useState(true)
  let [count , setCount]= useState(1)
  return <div className="box"> 
      <h1>Is Moring {isMoring} ? "Moring":"Night" </h1>
       <Message counter={count} />
    <button onClick={ ()=> setCount(count +1)} >increment</button>
    </div>
}

export default App;
