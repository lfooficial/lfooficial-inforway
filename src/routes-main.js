import React from 'react'

import Home from './components/Home'

import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'

export default function RoutesMain(){
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path} component={Home}/>
        </Switch>
    )
}