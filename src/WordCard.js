import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
export default class WordCard extends Component {
  activate = c => {
    console.log(`${c} has been activated.`);
import _ from "lodash";

const prepareStateFromWord = given_word => {
  let word = given_word.toUpperCase();
  let chars = _.shuffle(Array.from(word));
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
  };
};

export default class WordCard extends Component {
  constructor(props){
    super(props)
    this.state = prepareStateFromWord(this.props.value)
  }

  activateHandler = c => {
    console.log(`${c} has been activate`);
    let guess = this.state.guess + c;

    console.log("guess : " + guess.length);
    console.log("word : " + this.state.word.length);

    this.setState({ guess });
    if (guess.length == this.state.word.length) {
      if (guess == this.state.word) {
        this.setState({ guess: "", complete: true });
      } else {
        this.setState({ guess: "", attempt: this.state.attempt + 1 });
      }
    }
  };

  render() {
    return (
      <div>
        {Array.from(this.props.value).map((c, i) => (
      <div className="App">
        {Array.from(this.state.chars).map((c, i) => (
          <CharacterCard
            value={c}
            key={i}
            activationHandler={this.activateHandler}
            attempt={this.state.attempt}
            activateHandler={this.activateHandler}
          />
        ))}
      </div>
    );
  }
}
}