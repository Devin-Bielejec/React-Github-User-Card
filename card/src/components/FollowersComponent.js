import React, { Component, componentDidMount } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";

class FollowersComponent extends React.Component {
    constructor(props) {
        console.log(props);
        super();
        this.state = {
            followers: props.followers
        }
        }

    componentDidMount() {
        //axios call
        axios.get(`https://api.github.com/users/${this.state.user.login}`)
        .then(res => {
            this.setState({user: res.data});
            return axios.get(this.state.user.followers_url);
        })
        .then(res => {
            this.setState({user: this.state.user, followers: res.data});
        })
        .catch(err => console.log(`Error: ${err}`))
    }
    
    render() {
        {console.log("Render", this.state)}
        return(
            <div>
                {this.state.followers.map(follower => {
                {console.log(follower)}
                return <CardComponent user={follower}/>
                })}
            </div>
        )
    }    
    }
    

export default FollowersComponent;