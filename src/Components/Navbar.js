import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logoImage from "./logo.png";

const Navbar = ({ toggleSignInForm }) => {
  const [showNavbar, setShowNavbar] = useState(false); // Define showNavbar state
  const navRef = useRef(null); // Define navRef

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar); // Toggle showNavbar state
  };
  const handleGetStartedClick = () => {
    toggleSignInForm();
    const page = document.querySelector('.page');
    if (page) {
      page.classList.toggle('hidden');
    }
  };

  return (
    <header>
      <h3>
        <img src={logoImage} alt="Logo" className="logo-img" />
      </h3>
      {/* <nav ref={navRef} className={`navbar ${showNavbar ? "show" : ""}`}>

        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav> */}
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
      <button className="get-started-btn" onClick={toggleSignInForm}>
        Get Started
      </button>
      
    </header>
  );
};

export default Navbar;
