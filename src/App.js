import React, { Component } from 'react'


import { BrowserRouter } from 'react-router-dom';

import MainComponent from './components/MainComponent';
import './App.css';
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <MainComponent></MainComponent>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

