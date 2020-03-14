import React from "react";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import '../node_modules/font-awesome/css/font-awesome.css';
import {AnimatePresence, motion} from "framer-motion";

function PortfolioPage() {
    
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
      <section data-index="1" className="portfolio-page" id="portfolio">
          <h1 className="portfolio-page__portfolio-title">Portfolio</h1>
      </section>
      </motion.div>
    );
}

export default PortfolioPage;