import React from 'react'

import PageHome from './components/PageHome'
import PageConverageArea from './components/PageConverageArea'

import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'

export default function RoutesMain(){
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path} component={PageHome}/>
        </Switch>
    )
}