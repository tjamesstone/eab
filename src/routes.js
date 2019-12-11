import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import MakeAPayment from './components/MakeAPayment'
import HireUs from './components/HireUs'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/payment" component={MakeAPayment}/>
        <Route path="/hire" component={HireUs}/>
    </Switch>
)