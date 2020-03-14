import React from "react";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import '../node_modules/font-awesome/css/font-awesome.css';
import {AnimatePresence, motion} from "framer-motion";

function AboutPage() {
    
  
  const pageTransition = {
    in: {
      translateX: 0,
      opacity: 1
    },

    out: {
      translateX: "-100vh",
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
      <div className="background-div-green"></div>
      <section data-index="5" className="about-page" id="about">
          <h1 className="about-page__about-title">About</h1>
      </section>
      
      </motion.div>
      
    );
}

export default AboutPage;