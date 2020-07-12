import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from './components/HomePage'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomePage} />
            </Switch>
        </Router>
    )
}
