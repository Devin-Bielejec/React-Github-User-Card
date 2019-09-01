import React, { Component, componentDidMount } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";

class FollowersComponent extends React.Component {
    constructor(props) {
        super();
        }
    
    componentDidMount() {
        axios.get(this.state.user.followers_url)
        .then(res => {
            console.log(res.data);
            this.setState({users: res.data})
        })
        .catch(err => console.log(`Error: ${err}`))
    }
    
        

    render() {
        return(
            <div>
                {this.state.users.map(follower => <CardComponent user={follower}/>)}
            </div>
        )
    }    
    }
    

export default FollowersComponent;