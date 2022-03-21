import styled from "styled-components";

export const InfoComponentContainer = styled.div`
  display: flex;
  flex-direction: ${({ Reversed }) => (Reversed ? "row-reverse" : "row")};
  height: 600px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;

export const TextCol = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    width: 100%;
    padding: 4rem 0;
    width: 70%;
  }

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;

export const TextContainer = styled.div`
  max-width: 60%;

  @media screen and (max-width: 850px) {
    max-width: 70%;
    text-align: center;
  }

  @media screen and (max-width: 850px) {
    max-width: 90%;
  }
`;

export const ImgCol = styled.div`
  width: 50%;

  @media screen and (max-width: 850px) {
    width: 100%;
    height: 400px;
  }
`;

export const InfoH3 = styled.h3`
  font-size: 2.6rem;
  font-weight: bold;
  font-family: "Fraunces", serif;
  color: black;
  margin-bottom: 3rem;

  @media screen and (max-width: 850px) {
    font-size: 2rem;
  }
`;

export const InfoP = styled.p`
  font-size: 1.1rem;
  font-family: "Barlow", sans-serif;
  line-height: 1.6;
  color: hsl(232, 10%, 55%);
  margin-bottom: 3rem;
`;

export const InfoBtn = styled.div`
  position: relative;
  font-family: "Fraunces", serif;
  border: none;
  outline: none;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  display: inline-block;
  margin-left: 5px;

  &::after {
    content: "";
    position: absolute;
    left: -5%;
    right: 0;
    bottom: -3px;
    width: 110%;
    height: 50%;
    background-color: hsla(51, 100%, 49%, 0.3);
    border-radius: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const InfoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
