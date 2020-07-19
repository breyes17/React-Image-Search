import React from "react";
import "../css/ImageList.css";
import Image from "./Image";

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <Image key={image.id} image={image} />
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;
