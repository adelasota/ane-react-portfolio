import React, { Component } from 'react';
import moment from "moment";
import "moment/locale/es";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Anuska Portfolio</h1>
        <div>{moment().format('LLL')}</div>
      </div>
    );
  }
}
