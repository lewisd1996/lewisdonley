import React, { useState } from "react";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import '../node_modules/font-awesome/css/font-awesome.css';
import {AnimatePresence, motion} from "framer-motion";

function PhotographyPage() {
    
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

  const [isActive,setActive] = useState("")

    return (    


      <motion.div 
      exit="out"
      animate="in"
      initial="out"
      variants={pageTransition} 
      >
      <section data-index="3" className="photography-page" id="photography">
          <h1 className="photography-page__photography-title">Photography</h1>
          <div className = "gallery">

            <div className="gallery__box">
            <div className="gallery__box__info" onClick={() => setActive("1")}>
            <h1>Taiwan, Kaohsiung</h1>
            <p>2020</p>
            </div>
            <img src="https://i.imgur.com/iXJZOyl.jpg" alt=""/>
            </div>

            <div className="gallery__box">
            <div className="gallery__box__info" onClick={() => setActive("2")}>
            <h1>Japan, Tokyo</h1>
            <p>2020</p>
            </div>
            <img src="https://i.imgur.com/wHTLEXk.jpg" alt=""/>
            </div>

            <div className="gallery__box">
            <div className="gallery__box__info"onClick={() => setActive("3")}>
            <h1>Japan, Kyoto</h1>
            <p>2020</p>
            </div>
            <img src="https://i.imgur.com/g5iSkqH.jpg" alt=""/>
            </div>

            <div className="gallery__box">
            <div className="gallery__box__info" onClick={() => setActive("4")}>
            <h1>Japan, Tokyo</h1>
            <p>2020</p>
            </div>
            <img src="https://i.imgur.com/8auZhYq.jpg" alt=""/>
            </div>

            <div className="gallery__box">
            <div className="gallery__box__info"onClick={() => setActive("5")}>
            <h1>Penang, Malaysia</h1>
            <p>2020</p>
            </div>
            <img src="https://i.imgur.com/qacVBiP.jpg" alt=""/>
            </div>

            <div className="gallery__box">
            <div className="gallery__box__info"onClick={() => setActive("6")}>
              <h1>Taiwan, Kaohsiung</h1>
              <p>2020</p>
              </div>
            <img src="https://i.imgur.com/PJN9Dcp.jpg" alt=""/>
            </div>

            <div className="gallery__box">
            <div className="gallery__box__info"onClick={() => setActive("7")}>
              <h1>Japan, Tokyo</h1>
              <p>2020</p>
              </div>
            <img src="https://i.imgur.com/YnSxTSX.jpg" alt=""/>
            </div>

            <div className="gallery__box">
            <div className="gallery__box__info"onClick={() => setActive("8")}>
              <h1>Japan, Tokyo</h1>
              <p>2020</p>
              </div>
            <img src="https://i.imgur.com/PgjL3wN.jpg" alt=""/>
            </div>

            <div className="gallery__box">
            <div className="gallery__box__info"onClick={() => setActive("9")}>
              <h1>Japan, Tokyo</h1>
              <p>2020</p>
              </div>
            <img src="https://i.imgur.com/q2lLIF8.jpg" alt=""/>
            </div>

          </div>


          <div className={` ${isActive === "" ? 'overlay' : 'overlay overlay__active'}`}>
            <div className={` ${isActive === "" ? 'overlay__image-popout' : 'overlay__image-popout overlay__image-popout__active'}`}>
              <div className={` ${isActive === "" ? 'overlay__image-popout__image-wrapper' : 'overlay__image-popout__image-wrapper overlay__image-popout__image-wrapper__active'}`}>
                <button className={` ${isActive === "" ? 'overlay__image-popout__image-wrapper__close-button' : 'overlay__image-popout__image-wrapper__close-button overlay__image-popout__image-wrapper__close-button__active'}`} onClick={() => setActive("")}>&times;</button>
                <img className={` ${isActive === "1" ? 'overlay__image-popout__image-wrapper__image__1' : 'overlay__image-popout__image-wrapper'}
                                  ${isActive === "2" ? 'overlay__image-popout__image-wrapper__image__2' : 'overlay__image-popout__image-wrapper'}
                                  ${isActive === "3" ? 'overlay__image-popout__image-wrapper__image__3' : 'overlay__image-popout__image-wrapper'}
                                  ${isActive === "4" ? 'overlay__image-popout__image-wrapper__image__4' : 'overlay__image-popout__image-wrapper'}
                                  ${isActive === "5" ? 'overlay__image-popout__image-wrapper__image__5' : 'overlay__image-popout__image-wrapper'}
                                  ${isActive === "6" ? 'overlay__image-popout__image-wrapper__image__6' : 'overlay__image-popout__image-wrapper'}
                                  ${isActive === "7" ? 'overlay__image-popout__image-wrapper__image__7' : 'overlay__image-popout__image-wrapper'}
                                  ${isActive === "8" ? 'overlay__image-popout__image-wrapper__image__8' : 'overlay__image-popout__image-wrapper'}
                                  ${isActive === "9" ? 'overlay__image-popout__image-wrapper__image__9' : 'overlay__image-popout__image-wrapper'}
                                  `}></img>
              </div>
            </div>
          </div>
          
      </section>
      </motion.div>
    );
}

export default PhotographyPage;