import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  position: fixed;
  z-index: 9999;
  left: 5%;
  background-color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  transition: all ease 0.4s;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "50px" : "-100%")};
  margin-top: ${({ scroll }) => (scroll ? "-1rem" : "4rem")};

  &:after {
    position: absolute;
    content: "";
    width: 0px;
    height: 0px;
    border-top: 20px solid transparent;
    border-right: 20px solid white;
    border-bottom: 20px solid white;
    border-left: 20px solid transparent;
    top: -20px;
    right: 0;
  }

  @media screen and (min-width: 850px) {
    display: none;
  }
`;

export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
`;

export const MobileLink = styled.div`
  background-color: ${({ highlighted }) =>
    highlighted ? "hsl(51, 100%, 49%)" : "transparent"};
  font-family: ${({ highlighted }) =>
    highlighted ? "'Fraunces', serif;" : "'Barlow', sans-serif"};
  padding: 1rem 2rem;
  border-radius: 40px;
`;
