import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #93cec2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 3rem;
  filter: invert(28%) sepia(44%) saturate(452%) hue-rotate(116deg)
    brightness(50%) contrast(94%);
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const FooterLink = styled(LinkR)`
  margin: 0 2rem;
  text-decoration: none;
  color: hsl(168, 34%, 41%);
  font-family: "Barlow", sans-serif;
  font-size: 1.1rem;

  &:hover {
    filter: brightness(100) saturate(100%);
  }

  @media screen and (max-width: 850px) {
    margin: 1rem 0;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const Icon = styled.img`
  width: 100%;
  margin: 0 1rem;

  &:hover {
    cursor: pointer;
    filter: brightness(100) saturate(100%);
  }
`;
