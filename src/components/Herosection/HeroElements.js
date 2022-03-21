import styled from "styled-components";
import HeroBg from "../../images/desktop/image-header.jpg";

export const HeroContainer = styled.div`
  background-image: url(${HeroBg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

export const HeroText = styled.h2`
  font-family: "Fraunces", serif;
  text-transform: uppercase;
  font-size: 3.6rem;
  text-align: center;
  letter-spacing: 6px;
  color: white;
  margin-bottom: 5rem;

  @media screen and (max-width: 850px) {
    font-size: 1.8rem;
  }
`;

export const ArrowDown = styled.img`
  width: 40px;

  @media screen and (max-width: 850px) {
    width: 30px;
  }
`;
