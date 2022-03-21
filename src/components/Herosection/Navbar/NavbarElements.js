import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 3rem;
  padding: 2rem 0rem;
  align-items: center;
  font-family: "Barlow", sans-serif;

  @media screen and (max-width: 850px) {
    margin: 0 1rem;
  }
`;

export const NavbarLogo = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  list-style: none;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.img`
  display: none;

  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

export const NavbarLink = styled(LinkR)`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 600;
`;

export const NavbarHighlightedLink = styled(LinkR)`
  color: black;
  background-color: white;
  border-radius: 40px;
  padding: 1rem 1.5rem;
  font-family: "Fraunces", serif;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    transition: all ease 0.2s;
    background-color: rgba(255, 255, 255, 0.35);
    color: white;
  }
`;
