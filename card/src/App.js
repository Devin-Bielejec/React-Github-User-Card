import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from "./components/CardComponent";
import NavBarComponent from "./components/NavBarComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <Router>
        <NavBarComponent/>

        <Route path="/profile" render={(props) => (<CardComponent {...props} user={this.state.users[0]} />)}/>
      </Router>
    )
  }
}

export default App;
