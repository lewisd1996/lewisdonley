import React from "react";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import '../node_modules/font-awesome/css/font-awesome.css';
import {AnimatePresence, motion} from "framer-motion";

function ArtworkPage() {
    
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
      <section data-index="2" className="doodles-page" id="doodles">
          <h1 className="doodles-page__doodles-title">Artwork</h1>
      </section>
      </motion.div>
    );
}

export default ArtworkPage;