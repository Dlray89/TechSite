import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Welcome from "./Pages/Welcome"
import Projects from "./Pages/projects"
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={Welcome}   />
            <Route exact path='/projects' component={Projects}   />
        </Switch>
      
    </div>
  );
}

export default App;
