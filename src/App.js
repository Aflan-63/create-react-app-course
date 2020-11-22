import logo from './logo.svg';

import { Navbar, NavbarBrand, Button } from 'reactstrap';
import './App.css';

import React, { Component } from 'react'
import MenuComponent from './components/MenuComponent';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary" className="">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>

          </div>
        </Navbar>
        <MenuComponent></MenuComponent>
      </div>
    )
  }
}

