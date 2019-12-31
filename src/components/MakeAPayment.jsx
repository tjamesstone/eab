import React from 'react'
import {Link} from 'react-router-dom'

export default class MakeAPayment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            caseId: '',
        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }


    render(){
        return(
            <div className="MakeAPayment">
                <header>
                    <Link to="/" ><button>Back</button></Link>
                    <h2>Equitable Adjustment Bureau</h2>
                </header>
                <div className="accountinfo">
                    <div className="caseinfo">
                        <p>You can find your case by entering the case number found in the emails and letters you've recieved</p>
                        <input 
                        name='caseId' placeholder='Case Number' onChange={e => this.handleChange(e, 'caseId')} value={this.state.caseId}
                        type="text"/>
                        <button>Find Case</button>
                    </div>
                </div>
                
            </div>
        )
    }
}