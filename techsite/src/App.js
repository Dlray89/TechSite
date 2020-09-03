import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Intro from "../src/Pages/intro"
import Welcome from "./Pages/Welcome"
import Projects from "./Pages/projects"
import Layout from '../src/Layout/index'
import './App.css';

function App() {
  return (
    <div className="App">
          <Switch>

            <Route exact path='/welcome' component={Welcome}   />
            <Route exact path='/projects' component={Projects}   />
              <Route exact path='/' component={Intro} />
              <Route path='/page' component={ Layout } />
        </Switch>
      
    </div>
  );
}

export default App;
