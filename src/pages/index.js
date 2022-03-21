import React, { useState, useEffect } from "react";
import Testamonials from "../components/ClientTestamonials";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Herosection from "../components/Herosection";
import MobileMenu from "../components/Herosection/Navbar/MobileMenu";
import Infosection from "../components/Infosection";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (window.innerWidth < 850) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Herosection toggle={toggle} />
      <Infosection />
      <Testamonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Homepage;
