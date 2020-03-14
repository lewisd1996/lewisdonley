import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import '../node_modules/font-awesome/css/font-awesome.css';
import {AnimatePresence, motion} from "framer-motion";

function LandingPage() {
    
  const pageTransition = {
    in: {
      translateY: 0,
      opacity: 1
    },

    out: {
      translateY: "-100vh",
      opacity: 0.2
    }
  };

    return (    


      <motion.div 
      exit="out"
      animate="in"
      initial="out"
      variants={pageTransition} 
      >
      <section data-index="0" className="landing-page" id="landingpage">
          <h1 className="landing-page__name-title">Lewis Donley</h1>
          <h2 className="landing-page__job-title">Web Developer</h2>
          
      </section>
      </motion.div>
    );
}

export default LandingPage;