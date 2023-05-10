import React, { useState } from "react";
import chevronLeft from "../assets/chevron-left.png";
import chevronRight from "../assets/chevron-right.png";

const SlideShow = (images) => {
  const [counter, setCounter] = useState(0);
  const pictures = images.images;
  const slideLength = pictures.length;
  //console.log(pictures);

  let actualImage;
  actualImage = pictures[counter];

  const slideLeft = () => {
    setCounter(counter - 1);
    {
      counter === 0 && setCounter(slideLength - 1);
    }
  };

  const slideRight = () => {
    setCounter(counter + 1);
    {
      counter >= slideLength - 1 && setCounter(0);
    }
  };

  console.log(counter);
  return (
    <div className="slider-container">
      <img
        onClick={() => slideLeft()}
        className="arrow arrow-left"
        src={chevronLeft}
        alt="arrow left"
      />
      <img className="banner-img" src={actualImage} alt="" />
      <img
        onClick={() => slideRight()}
        className="arrow arrow-right"
        src={chevronRight}
        alt="arrow right"
      />
    </div>
  );
};

export default SlideShow;
