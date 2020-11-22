import logo from './logo.svg';

import { Navbar, NavbarBrand, Button } from 'reactstrap';
import './App.css';

import React, { Component } from 'react'
import MenuComponent from './components/MenuComponent';
import { DISHES } from './shared/dishes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary" className="">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>

          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes}></MenuComponent>
      </div>
    )
  }
}

