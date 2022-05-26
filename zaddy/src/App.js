import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import JokesDisplay from './jokesdisplay';
import Button from './button';
class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: "",
    };
  }
  componentDidMount = () => {
    this.getDadJokes();
  };
  getDadJokes = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        this.setState({
          jokes: response.data.joke,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  render() {
    console.log(this.state.jokes);
        return (
          <div className="App">
          <nav>
            <div className="dad-jokes">Dad Jokes</div>
          </nav>
          <JokesDisplay
            jokes = {this.state.jokes}
          />
          <Button 
            jokes ={this.getDadJokes}
          />
          </div>
        );
      }
}
export default App;
