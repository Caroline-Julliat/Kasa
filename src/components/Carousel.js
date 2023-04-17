import React, { useState } from "react"
import chevronGauche from "../assets/images/chevron-gauche.svg"
import chevronDroit from "../assets/images/chevron-droit.svg"

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const picturesArray = props.pictures

  // function to handle the click on the LEFT arrow
  const goLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(picturesArray.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // function to handle the click on the RIGHT arrow
  const goRight = () => {
    if (currentIndex < picturesArray.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  return (
    <div className="carousel-container">
      <button
        className="arrow-left"
        // if the accommodation has only one photo, the arrow are not displayed
        style={{
          display: picturesArray.length === 1 ? "none" : "",
        }}
        onClick={() => goLeft()}
      >
        <img src={chevronGauche} alt="chevron gauche" />
      </button>
      <img
        className="carousel-picture"
        src={picturesArray[currentIndex]}
        alt={props.alt + " " + currentIndex}
      />
      <button
        className="arrow-right"
        // if the accommodation has only one photo, the arrow are not displayed
        style={{
          display: picturesArray.length === 1 ? "none" : "",
        }}
        onClick={() => goRight()}
      >
        <img src={chevronDroit} alt="chevron droit" />
      </button>
      <span
        // if the accommodation has only one photo, the pagination is not displayed
        style={{
          display: picturesArray.length === 1 ? "none" : "",
        }}
      >
        {currentIndex + 1 + "/" + picturesArray.length}
      </span>
    </div>
  )
}

export default Carousel
