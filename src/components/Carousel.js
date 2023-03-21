import React, { useState } from "react"
import chevronGauche from "../assets/images/chevron-gauche.svg"
import chevronDroit from "../assets/images/chevron-droit.svg"

const Carousel = (props) => {
  const [currentPictures, setCurrentPictures] = useState(0)
  const picturesArray = props.pictures

  // console.log(picturesArray)
  // console.log(picturesArray.length)

  const goLeft = () => {
    if (currentPictures === 0) {
      setCurrentPictures(picturesArray.length - 1)
    } else {
      setCurrentPictures(currentPictures - 1)
    }
  }

  const goRight = () => {
    if (currentPictures < picturesArray.length - 1) {
      setCurrentPictures(currentPictures + 1)
    } else {
      setCurrentPictures(0)
    }
  }

  return (
    <div className="carousel-container">
      <button onClick={() => goLeft()}>
        <img src={chevronGauche} alt="chevron gauche" />
      </button>
      <img
        src={picturesArray[currentPictures]}
        alt={props.alt + " " + currentPictures}
      />
      <button onClick={() => goRight()}>
        <img src={chevronDroit} alt="chevron droit" />
      </button>
    </div>
  )
}

export default Carousel
