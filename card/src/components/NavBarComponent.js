import React, { Component } from "react";
import { Menu } from 'semantic-ui-react'


class NavBarComponent extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state

        return(
        <Menu fixed="left" vertical={true} inverted={true} color={"green"} stackable={true} compact={true}>
            <Menu.Item
            name='Profile'
            active={activeItem === 'Profile'}
            onClick={this.handleItemClick}
            >
            Profile
            </Menu.Item>

            <Menu.Item
            name='Followers'
            active={activeItem === 'Followers'}
            onClick={this.handleItemClick}
            >
            Followers
            </Menu.Item>

            <Menu.Item
            name='Following'
            active={activeItem === 'Following'}
            onClick={this.handleItemClick}
            >
            Following
            </Menu.Item>
      </Menu>
        )
    }
}

export default NavBarComponent;