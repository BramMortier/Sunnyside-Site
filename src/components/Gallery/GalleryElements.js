import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;

  @media screen and (max-width: 850px) {
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Picture = styled.img`
  width: 25%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;
