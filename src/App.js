import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Message} from "./Message.js"
import "./App.css"

function App() {
  let [isMoring,setMorning]=useState(false)
  let [count , setCount]= useState(1)
  return <div className= {`box ${isMoring ? "dayLight":""} `} > 
      <h3>Good {isMoring ? "Moring":"Night" } </h3>
       <Message counter={count} />
    <button onClick={ ()=> setCount(count +1)} >increment</button>
    <br/>
    <button onClick={ ()=> setMorning(!isMoring)} >Change color</button>

    </div>
}

export default App;
