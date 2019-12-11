import React, {Component} from 'react';
import './App.scss';
// import routes from './routes'
import {HashRouter} from 'react-router-dom'



export default class App extends Component {

  render(){
    return (
      <HashRouter>

      <div className="App">
        <header>
          <h1>Equitable Adjustment Bureau</h1>
        </header>
        <div className="nav">
          <div className="hire">
            <h2>Hire Us</h2>
          </div>
          <div className="pay">
            <h2>Make A Payment</h2>
          </div>
        </div>
        <footer>
          <p>Equitable Adjustment Bureau ©2019</p>
        </footer>
      </div>
      </HashRouter>

    );
  }
  
}


