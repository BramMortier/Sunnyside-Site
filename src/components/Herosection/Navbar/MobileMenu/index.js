import React, { useState, useEffect } from "react";
import {
  MobileMenuContainer,
  MobileLinks,
  MobileLink,
} from "./MobileMenuElements";

const MobileMenu = ({ isOpen, toggle }) => {
  const [scroll, setScroll] = useState(false);

  const changeScroll = () => {
    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
  }, []);

  return (
    <MobileMenuContainer scroll={scroll} isOpen={isOpen} onClick={toggle}>
      <MobileLinks>
        <MobileLink>About</MobileLink>
        <MobileLink>Services</MobileLink>
        <MobileLink>Porjects</MobileLink>
        <MobileLink highlighted={true}>contact</MobileLink>
      </MobileLinks>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
