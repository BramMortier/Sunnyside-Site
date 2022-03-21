import React from "react";
import {
  InfoComponentContainer,
  TextCol,
  TextContainer,
  InfoH3,
  InfoP,
  InfoBtn,
  ImgCol,
  InfoImg,
} from "./InfoComp1Elements";

const InfoComponent1 = ({
  title,
  description,
  btncontent,
  img,
  reverseImg,
}) => {
  return (
    <InfoComponentContainer Reversed={reverseImg}>
      <TextCol>
        <TextContainer>
          <InfoH3>{title}</InfoH3>
          <InfoP>{description}</InfoP>
          <InfoBtn>{btncontent}</InfoBtn>
        </TextContainer>
      </TextCol>
      <ImgCol>
        <InfoImg src={img} />
      </ImgCol>
    </InfoComponentContainer>
  );
};

export default InfoComponent1;
