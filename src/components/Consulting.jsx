import React from 'react'
import './Consulting.scss';
import {Link} from 'react-router-dom';

export default class Consulting extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="consulting">
                <Link to="/" ><button>Back</button></Link>
                <h2>Consulting</h2>
                <div className="whyconsulting">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Temporibus tempore praesentium voluptatum impedit iusto 
                       sint deserunt recusandae ducimus perspiciatis doloribus, 
                       molestias veritatis veniam, mollitia vitae at eius! 
                       Nulla, beatae omnis.
                    </p>
                </div>
                <div className="consultingcontactform">
                    <p>Consulting Contact Form</p>
                </div>
            </div>
        )
    }
}