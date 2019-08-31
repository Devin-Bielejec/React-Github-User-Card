import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from "./components/CardComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //We will use users instead of just user so we can map through data
      //We will set up a basic user first
      users: [{
          id: "",
          name: "Devin",
          login: "",
          avatar_url: "",
          html_url: "",
          blog: "",
          location: "",
          bio: "",
          followers: 0,
          following: 0
      }]
    }
  }

  render() {
    return(
      <div>
        <h1>Up Up and Away!</h1>
        <CardComponent user={this.state.users[0]} />
      </div>
    )
  }
}

export default App;
