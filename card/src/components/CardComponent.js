import React, { Component } from "react";
import { render } from "react-dom";
import { Card, Icon, Image } from "semantic-ui-react";

const CardComponent = props => {
    return(
        <Card>
        <Image src={props.user.avatar_url} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{props.user.name}</Card.Header>
            <Card.Meta>
            <span className='date'>{props.user.location}</span>
            </Card.Meta>
            <Card.Description>
            {props.user.bio}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
            <Icon name='followers' />
            {props.user.followers} Followers
            </a>
            <a>
            <Icon name='following' />
            {props.user.following} Following
            </a>
        </Card.Content>
        </Card>
    )
}

export default CardComponent;
