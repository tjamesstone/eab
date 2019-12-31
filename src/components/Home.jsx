import React from 'react'
import './Home.scss';


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
            <h2>Hire Us</h2>
          </div>
          <div className="pay">
            <h2>Make A Payment</h2>
          </div>
          <div className="pay">
            <h2>Consulting</h2>
          </div>
        </div>
        <footer>
          <p>Equitable Adjustment Bureau ©2019</p>
        </footer>
            </div>
        )
    }
}