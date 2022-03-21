import styled from "styled-components";

export const TestamonialsContainer = styled.div`
  min-height: 300px;
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Barlow", sans-serif;

  @media screen and (max-width: 850px) {
    margin: 4rem 0;
  }
`;

export const Title = styled.h2`
  font-family: "Fraunces", serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: hsl(210, 4%, 67%);
  margin-bottom: 5rem;
  letter-spacing: 5px;
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 1 / 3;
  height: 100%;
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 80px;
  margin-bottom: 4rem;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  line-height: 120%;
  margin-bottom: 4rem;
  line-height: 2rem;
  color: hsl(213, 9%, 39%);
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h3`
  color: hsl(212, 27%, 19%);
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Fraunces", serif;
  margin-bottom: 0.5rem;
`;

export const Jobtitle = styled.h4`
  color: gray;
  font-size: 0.9rem;
  color: hsl(210, 4%, 67%);
  margin-bottom: 2rem;
`;
