import React from "react";
import {
  NavbarContainer,
  NavbarLogo,
  Logo,
  NavbarLinks,
  NavbarLink,
  NavbarHighlightedLink,
  HamburgerMenu,
} from "./NavbarElements";
import HeaderLogo from "../../../images/logo.svg";
import HamburgerIcon from "../../../images/icon-hamburger.svg";

const Navbar = ({ toggle }) => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <Logo src={HeaderLogo} />
      </NavbarLogo>
      <HamburgerMenu src={HamburgerIcon} onClick={toggle} />
      <NavbarLinks>
        <NavbarLink to="/">About</NavbarLink>
        <NavbarLink to="/">Services</NavbarLink>
        <NavbarLink to="/">Projects</NavbarLink>
        <NavbarHighlightedLink to="/">Contact</NavbarHighlightedLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
