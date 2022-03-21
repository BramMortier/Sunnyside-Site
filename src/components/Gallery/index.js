import React from "react";
import { GalleryContainer, Picture } from "./GalleryElements";
import { Images } from "./data";

const Gallery = () => {
  return (
    <GalleryContainer>
      <Picture src={Images.milk} />
      <Picture src={Images.orange} />
      <Picture src={Images.cone} />
      <Picture src={Images.sugarcubes} />
    </GalleryContainer>
  );
};

export default Gallery;
