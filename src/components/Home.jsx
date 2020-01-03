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
                <nav className="nav" >
                    <div className="hire">
                        <Link to="/hire"><h2 className="navtitle" >Hire Us</h2></Link>
                    </div>
                    <div className="pay">
                        <Link to="/payment"><h2 className="navtitle" >Make A Payment</h2></Link>
                    </div>
                    <div className="pay">
                        <Link to="/consulting"><h2 className="navtitle" >Consulting</h2></Link> 
                    </div>
                </nav>
                <footer>
                    <p>Equitable Adjustment Bureau ©2019</p>
                </footer>
            </div>
        )
    }
}