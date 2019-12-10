import React from 'react';
import './App.css';

const ms=3804000

function App() {
  const milliseconds = ms % 1000;
const ms1 = (ms - milliseconds) / 1000;
const seconds = ms1 % 60;
const ms2 = (ms1 - seconds) / 60;
const minutes = ms2 % 60;
const hours = (ms2 - minutes) / 60;
const pad = (n, z = 2) => `00${n}`.slice(-z);


  return (`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

}

export default App;
