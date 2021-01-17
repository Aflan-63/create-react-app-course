import React, { Component } from 'react'


import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import MainComponent from './components/MainComponent';
import './App.css';

const store = ConfigureStore();
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MainComponent></MainComponent>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

