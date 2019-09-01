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
          login: "",
          avatar_url: "",
          html_url: "",
          blog: "",
          location: "",
          bio: "",
          followers: 0,
          following: 0
      },
      users: []
    }
  }

  componentDidMount() {
    //axios call
    axios.get("https://api.github.com/users/Devin-Bielejec")
    .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({user: res.data});
    })
    .catch(err => console.log(`Error: ${err}`))
}

  render() {
    return(
      <Router>
        <NavBarComponent/>

        <Route path="/profile" render={(props) => (<CardComponent user={this.state.user}/>)}/>
        <Route path="/followers" render={(props) => (<FollowersComponent users={this.state.users}/>)}/>
      </Router>
    )
  }
}

export default App;
