import React from "react";

const CarouselImage = ({ imageUrl, text }) => {
  return (
    <div className="carousel-image">
      <img
        src={imageUrl}
        alt={text}
        className="img-fluid"
        style={{ maxHeight: "40rem" }}
      />
    </div>
  );
};

export default CarouselImage;
