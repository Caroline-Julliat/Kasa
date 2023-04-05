import React, { useState } from "react"
import chevronGauche from "../assets/images/chevron-gauche.svg"
import chevronDroit from "../assets/images/chevron-droit.svg"

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const picturesArray = props.pictures

  // console.log(picturesArray)
  // console.log(picturesArray.length)

  const goLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(picturesArray.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goRight = () => {
    if (currentIndex < picturesArray.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  return (
    <div className="carousel-container">
      <button className="arrow-left" onClick={() => goLeft()}>
        <img src={chevronGauche} alt="chevron gauche" />
      </button>
      <img
        className="carousel-picture"
        src={picturesArray[currentIndex]}
        alt={props.alt + " " + currentIndex}
      />
      <button className="arrow-right" onClick={() => goRight()}>
        <img src={chevronDroit} alt="chevron droit" />
      </button>
      <span>{currentIndex + 1 + "/" + picturesArray.length}</span>
    </div>
  )
}

export default Carousel
