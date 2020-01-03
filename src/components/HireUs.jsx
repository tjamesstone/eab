import React from 'react'
import {Link} from 'react-router-dom'
import './HireUs.scss';

export default class HireUs extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="hireus">
                <Link to="/" ><button>Back</button></Link>
                <h2>Hire Us</h2>
                <div className="whyhireus">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Temporibus tempore praesentium voluptatum impedit iusto 
                       sint deserunt recusandae ducimus perspiciatis doloribus, 
                       molestias veritatis veniam, mollitia vitae at eius! 
                       Nulla, beatae omnis.
                    </p>
                </div>
                <div className="hireusform">
                    <p>Hire Us Form</p>
                </div>
            </div>
        )
    }
}