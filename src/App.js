import React, {Component} from 'react';
import './App.scss';
import routes from './routes'
import {HashRouter} from 'react-router-dom'



export default class App extends Component {

  render(){
    return (
      <HashRouter>

      <div className="App">
       
        {routes}
      </div>
      </HashRouter>

    );
  }
  
}


