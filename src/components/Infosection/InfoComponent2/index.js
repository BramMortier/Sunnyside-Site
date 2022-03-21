import React from "react";
import {
  InfoComponentContainer,
  Col,
  Col2,
  InfoH4,
  Content,
  InfoP,
} from "../InfoComponent2/InfoComp2Elements";

const InfoComponent2 = ({
  lefttitle,
  leftdescription,
  righttitle,
  rightdescription,
  leftimg,
  rightimg,
}) => {
  return (
    <InfoComponentContainer>
      <Col>
        <Content>
          <InfoH4>{lefttitle}</InfoH4>
          <InfoP>{leftdescription}</InfoP>
        </Content>
      </Col>
      <Col2>
        <Content>
          <InfoH4>{righttitle}</InfoH4>
          <InfoP>{rightdescription}</InfoP>
        </Content>
      </Col2>
    </InfoComponentContainer>
  );
};

export default InfoComponent2;
