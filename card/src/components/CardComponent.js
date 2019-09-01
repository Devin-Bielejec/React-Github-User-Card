import React, { Component, componentDidMount } from "react";
import { render } from "react-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import axios from "axios";

class CardComponent extends React.Component {
    //After this card component render, reset the the state to user etc, get data etc
    constructor(props){
        super();
        this.state = {
            user: props.user
        }
    }

    render() {
        {console.log(this.state)}
        return(
            <Card fixed={true}>
            <Image src={this.state.user.avatar_url} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{this.state.user.name}</Card.Header>
                <Card.Meta>
                <span className='date'>{this.state.user.location}</span>
                </Card.Meta>
                <Card.Description>
                {this.state.user.bio}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='users' />
                {this.state.user.followers} Followers
                </a>
                <a>
                <Icon name='users' />
                {this.state.user.following} Following
                </a>
            </Card.Content>
            </Card>
        )
    }
}

export default CardComponent;
