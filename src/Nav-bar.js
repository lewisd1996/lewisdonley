import React, { useState } from "react";
import buttonWasClicked from './ButtonClick';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.css';

function NavBar() {
  
  const [isActive,setActive] = useState("home")
  
  return (    
    <nav className="landing-page__nav-bar nav-bar">
    <ul className="nav-bar__list">
    {/* Button to Home Page */}
      <Link to ='/home'><li onClick={() => setActive("home")}> 
      <button className={` ${isActive === "home" ? 'btn__nav-bar-btn active-link' : 'btn__nav-bar-btn'}`}>Home</button>
       </li>
      </Link>
    {/* Button to Portfolio Page */}
      <Link to ='/portfolio'><li onClick={() => setActive("portfolio")}>
      <button className={` ${isActive === "portfolio" ? 'btn__nav-bar-btn active-link' : 'btn__nav-bar-btn'}`} >Portfolio</button>
        </li>
        </Link>
    {/* Button to Artwork Page */}
      <Link to ='/artwork'><li onClick={() => setActive("artwork")}>
      <button className={` ${isActive === "artwork" ? 'btn__nav-bar-btn active-link' : 'btn__nav-bar-btn'}`}>Artwork</button>
      </li></Link>
      {/* Button to Photography Page */}
      <Link to ='/photography'><li onClick={() => setActive("photography")}>
      <button className={` ${isActive === "photography" ? 'btn__nav-bar-btn active-link' : 'btn__nav-bar-btn'}`}>Photography</button>
      </li></Link>
      {/* Button to CV Page */}
      <Link to ='/cv'><li onClick={() => setActive("cv")}>
      <button className={` ${isActive === "cv" ? 'btn__nav-bar-btn active-link' : 'btn__nav-bar-btn'}`}>CV</button>
      </li></Link>
      {/* Button to About Page */}
      <Link to ='/about'><li onClick={() => setActive("about")}>
      <button className={` ${isActive === "about" ? 'btn__nav-bar-btn active-link' : 'btn__nav-bar-btn'}`}>About</button>
      </li></Link>
      {/* Button to Contact Page */}
      <Link to ='/contact'><li onClick={() => setActive("contact")}>
      <button className={` ${isActive === "contact" ? 'btn__nav-bar-btn active-link' : 'btn__nav-bar-btn'}`}>Contact</button>
      </li></Link>     
          
    </ul>
  </nav>
  
  );
    }
  
export default NavBar;