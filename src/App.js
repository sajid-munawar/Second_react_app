import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Message} from "./Message.js"

function App() {
  
  let [count , setCount]= useState(1)
  return <div> 
       <Message counter={count} />
    <button onClick={ ()=> setCount(count +1)} >increment</button>
    </div>
}

export default App;
