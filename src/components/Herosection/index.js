import React from "react";
import Navbar from "./Navbar";
import {
  HeroContainer,
  HeroText,
  ArrowDown,
  HeroContent,
} from "./HeroElements";
import Arrow from "../../images/icon-arrow-down.svg";

const Herosection = ({ toggle }) => {
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <HeroContent>
        <HeroText>we are creatives</HeroText>
        <ArrowDown src={Arrow} />
      </HeroContent>
    </HeroContainer>
  );
};

export default Herosection;
