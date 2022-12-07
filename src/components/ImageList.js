import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const { images } = props;

  const renderedImages = images.map(image => {
    return <ImageCard key={image.id} url={require(`../images/${image.name}`)} />
  });

  return (
    <div className="image-list">
      {renderedImages}
    </div>
  );

}

export default ImageList;