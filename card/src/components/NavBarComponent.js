import React, { Component } from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'


class NavBarComponent extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
                >
                <Menu.Item as='a'>
                    <Icon name='user' />
                    Profile
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='users' />
                    Followers
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='users' />
                    Following
                </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher>
                <Segment basic>
                    <Header as='h3'>Application Content</Header>
                    <Image src='/images/wireframe/paragraph.png' />
                </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }
}

export default NavBarComponent;