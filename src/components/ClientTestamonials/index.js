import React from "react";
import {
  TestamonialsContainer,
  Title,
  CardsContainer,
  Card,
  ProfilePicture,
  Description,
  CardFooter,
  Name,
  Jobtitle,
} from "./TestamonialElements";
import { TestamonialInfo } from "./data";

const Testamonials = () => {
  return (
    <TestamonialsContainer>
      <Title>{TestamonialInfo.sectiontitle}</Title>
      <CardsContainer>
        <Card>
          <ProfilePicture src={TestamonialInfo.card_1.profilepicture} />
          <Description>{TestamonialInfo.card_1.description}</Description>
          <CardFooter>
            <Name>{TestamonialInfo.card_1.name}</Name>
            <Jobtitle>{TestamonialInfo.card_1.jobtitle}</Jobtitle>
          </CardFooter>
        </Card>
        <Card>
          <ProfilePicture src={TestamonialInfo.card_2.profilepicture} />
          <Description>{TestamonialInfo.card_2.description}</Description>
          <CardFooter>
            <Name>{TestamonialInfo.card_2.name}</Name>
            <Jobtitle>{TestamonialInfo.card_2.jobtitle}</Jobtitle>
          </CardFooter>
        </Card>
        <Card>
          <ProfilePicture src={TestamonialInfo.card_3.profilepicture} />
          <Description>{TestamonialInfo.card_3.description}</Description>
          <CardFooter>
            <Name>{TestamonialInfo.card_3.name}</Name>
            <Jobtitle>{TestamonialInfo.card_3.jobtitle}</Jobtitle>
          </CardFooter>
        </Card>
      </CardsContainer>
    </TestamonialsContainer>
  );
};

export default Testamonials;
