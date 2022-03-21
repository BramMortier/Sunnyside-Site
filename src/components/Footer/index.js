import React from "react";
import {
  FooterContainer,
  Logo,
  FooterLinks,
  FooterLink,
  Socials,
  Icon,
} from "./FooterElements";
import FooterLogo from "../../images/logo.svg";
import Instagram from "../../images/icon-instagram.svg";
import Facebook from "../../images/icon-facebook.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Twitter from "../../images/icon-twitter.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={FooterLogo} />
      <FooterLinks>
        <FooterLink to="/">About</FooterLink>
        <FooterLink to="/">Services</FooterLink>
        <FooterLink to="/">Projects</FooterLink>
      </FooterLinks>
      <Socials>
        <Icon src={Facebook} />
        <Icon src={Instagram} />
        <Icon src={Pinterest} />
        <Icon src={Twitter} />
      </Socials>
    </FooterContainer>
  );
};

export default Footer;
