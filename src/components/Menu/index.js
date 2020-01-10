import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, MenuList } from './styles';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <MenuList>
          <li>
            <Link to="wtc">What's The Count</Link>
          </li>
          <li>Settings</li>
        </MenuList>
      </Container>
    );
  }
}

export default Menu;
