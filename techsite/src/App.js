import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { useTransition, animated } from "react-spring"
import Welcome from "./Pages/Welcome"
import Projects from "./Pages/projects"
import './App.css';

function App() {

    const location = useLocation()
    const transition = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transfrom: "translate3d(100%, 0, 0)" },
        enter: { opacity: 1, transform: "translate3d(0%, 0, 0" },
        leave: { opacity: 0, transform: "translate3d(-100%, 0, 0" }
    })
    return transition.map(({ item: location, key, props }) => (
        <animated.div key={key} style={props}>
            <Switch location={location}>
                <Route exact path='/' component={Welcome} />
                <Route path='/projects' component={Projects} />
            </Switch>

        </animated.div>
    ))

}

export default App;
