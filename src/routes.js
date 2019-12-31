import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import MakeAPayment from './components/MakeAPayment'
import HireUs from './components/HireUs'
import Consulting from './components/Consulting'


export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={MakeAPayment}  path="/payment" />
        <Route component={HireUs}  path="/hire" />
        <Route component={Consulting} path="/consulting"/>
    </Switch>
)