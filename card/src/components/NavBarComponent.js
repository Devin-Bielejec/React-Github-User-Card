import React, { Component } from "react";
import { Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

class NavBarComponent extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state

        return(
        <Menu fluid={true} inverted={true} color={"green"} widths={3}>
            <Menu.Item
            name='Profile'
            active={activeItem === 'Profile'}
            onClick={this.handleItemClick}
            to={"/"}
            as={NavLink}
            >
            Profile
            </Menu.Item>

            <Menu.Item
            name='Followers'
            active={activeItem === 'Followers'}
            onClick={this.handleItemClick}
            to={"/followers"}
            as={NavLink}
            >
            Followers
            </Menu.Item>

            <Menu.Item
            name='Following'
            active={activeItem === 'Following'}
            onClick={this.handleItemClick}
            to={"/following"}
            as={NavLink}
            >
            Following
            </Menu.Item>
      </Menu>
        )
    }
}

export default NavBarComponent;