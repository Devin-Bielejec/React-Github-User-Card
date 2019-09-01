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
    
    render() {
        {console.log("Render", this.state)}
        return(
            <div>
                {this.state.followers.map(follower => <CardComponent user={follower}/>)}
            </div>
        )
    }    
    }
    

export default FollowersComponent;