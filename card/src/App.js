import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from "./components/CardComponent";
import NavBarComponent from "./components/NavBarComponent";
import FollowersComponent from "./components/FollowersComponent";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //We will use users instead of just user so we can map through data
      //We will set up a basic user first
      user: {
          id: "",
          name: "Devin",
          login: "Devin-Bielejec",
          avatar_url: "",
          html_url: "",
          blog: "",
          location: "",
          bio: "",
          followers: 0,
          following: 0
      },
      followers: [{
        id: "",
        name: "Devin",
        login: "Devin-Bielejec",
        avatar_url: "",
        html_url: "",
        blog: "",
        location: "",
        bio: "",
        followers: 0,
        following: 0
    }],
    }
  }

  render() {
    return(
      <Router>
        <NavBarComponent/>

        <Route exact path="/" render={(props) => (<CardComponent user={this.state.user}/>)}/>
        <Route path="/followers" render={(props) => (<FollowersComponent followers={this.state.followers}/>)}/>

      </Router>
    )
  }
}

export default App;
