import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Welcome from "./Pages/Welcome"
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={Welcome}   />
        </Switch>
      
    </div>
  );
}

export default App;
