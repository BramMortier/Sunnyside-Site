import styled from "styled-components";
import img1 from "../../../images/desktop/image-graphic-design.jpg";
import img2 from "../../../images/desktop/image-photography.jpg";

export const InfoComponentContainer = styled.div`
  display: flex;
  height: max-content;
  height: 600px;
  overflow: hidden;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const Col = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${img1});
  background-size: cover;
  background-position: center center;

  @media screen and (max-width: 850px) {
    width: 100%;
    height: 600px;
  }
`;

export const Col2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${img2});
  background-size: cover;
  background-position: center center;

  @media screen and (max-width: 850px) {
    width: 100%;
    height: 600px;
  }
`;

export const InfoH4 = styled.h4`
  font-family: "Fraunces", serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: hsl(198, 62%, 26%);
  margin-bottom: 2rem;
`;

export const InfoP = styled.p`
  max-width: 370px;
  font-size: 1.1rem;
  font-family: "Barlow", sans-serif;
  line-height: 1.6;
  color: hsl(198, 62%, 26%);
  margin-bottom: 4.5rem;
  margin-inline: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  text-align: center;
  justify-content: flex-end;
`;
