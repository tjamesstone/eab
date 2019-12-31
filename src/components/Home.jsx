import React from 'react'
import './Home.scss';
import {Link} from 'react-router-dom'


export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="home">
                <header>
          <h1>Equitable Adjustment Bureau</h1>
        </header>
        <div className="nav">
          <div className="hire">
            <Link to="/hire"><h2>Hire Us</h2></Link>
          </div>
          <div className="pay">
            <Link to="/payment"><h2>Make A Payment</h2></Link>
          </div>
          <div className="pay">
              <Link to="/consulting"><h2>Consulting</h2></Link> 
          </div>
        </div>
        <footer>
          <p>Equitable Adjustment Bureau ©2019</p>
        </footer>
            </div>
        )
    }
}