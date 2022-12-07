
import React from "react";
import ImageList from "./ImageList";
import './home.css';

const HomeContent = () => {
  const images = [
    {
      id: 1,
      name: 'aurora.jpeg'
    },
    {
      id: 2,
      name: 'beach-sunset.jpg'
    },
    {
      id: 3,
      name: 'beach-reflection.jpg'
    },
    {
      id: 4,
      name: 'christmas-lights.jpeg'
    },
    {
      id: 5,
      name: 'golden-hour-1.jpeg'
    },
    {
      id: 6,
      name: 'golden-hour-2.jpeg'
    },
    {
      id: 7,
      name: 'mountain-fall-colors.jpeg'
    },
    {
      id: 8,
      name: 'mountain-fall-colors-2.jpeg'
    },
    {
      id: 9,
      name: 'mountain-portrait.jpeg'
    },
    {
      id: 10,
      name: 'snow-and-fall.jpeg'
    },
    {
      id: 11,
      name: 'snow-and-fall-2.jpeg'
    },
    {
      id: 12,
      name: 'sunflower-portrait.jpeg'
    }
  ];

  return (
    <div className="home-content container">
      <div>
        <ImageList images={images} />
      </div>
    </div>
  );
};

export default HomeContent;