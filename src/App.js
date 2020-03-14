import React, {Component} from 'react';
import './App.scss';
import * as Scroll from 'react-scroll';
import '../node_modules/font-awesome/css/font-awesome.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import { Redirect } from 'react-router';
import {AnimatePresence, motion} from "framer-motion";

import LandingPage from './Page-landing';
import PortfolioPage from './Page-portfolio';
import ArtworkPage from './Page-artwork';
import PhotographyPage from './Page-photography';
import CVPage from './Page-cv';
import AboutPage from './Page-about';
import ContactPage from './Page-contact';
import NavBar from './Nav-bar';

class App extends Component{

  

  render(){

  return(
    
    <Router>
      <Redirect to='/home'/>
      <NavBar />
      <div className ="container">
      <AnimatePresence>
      <Switch>
        <Route path="/home" component={LandingPage}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route path="/artwork" component={ArtworkPage}/>
        <Route path="/photography" component={PhotographyPage}/>
        <Route path="/cv" component={CVPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
      </Switch>
      </AnimatePresence>
      )
      }
    </div>
    </Router>
    
  );
  }
}

export default App;