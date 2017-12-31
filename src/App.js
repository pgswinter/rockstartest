import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store';
import ListAddressContainer from './containers/ListAddressContainer';
import './styles/style.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <Router>
            <div>
              <ListAddressContainer />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}
