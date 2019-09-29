import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
const word = "REACT";
// const word = "HELLOFINALTERMEXAM";


class App extends Component {
  render() {
    return (
      <div className="App">
          

          <WordCard value={word}/>
      </div>
    );
  }
}
export default App;