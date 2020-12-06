import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Intro from "../src/components/Intro_page/intro"
import IntroBG from './components/Intro_page/Intro_BG/introBG'
import Welcome from "./components/Welcome_page/Welcome"
import Projects from "./components/Project_page/projects"
import About from './components/About_page/About'
import './App.css';

function App() {
  return (
    <div className="App">
          <Switch>

            <Route exact path='/welcome' component={Welcome}   />
            <Route exact path='/projects' component={Projects}   />
              <Route exact path='/' component={IntroBG} />
              <Route exact path='/aboutme' component={About} />
        </Switch>
      
    </div>
  );
}

export default App;
