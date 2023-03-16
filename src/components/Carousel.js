import React, { useState } from "react"

const Carousel = (props) => {
  const [currentPictures, setCurrentPictures] = useState(0)
  const picturesArray = props.pictures

  // console.log(picturesArray)
  // console.log(picturesArray.length)

  const goLeft = () => {
    if (currentPictures === 0) {
      setCurrentPictures(picturesArray.length - 1)
      console.log("clic gauche")
      console.log(currentPictures)
    } else {
      setCurrentPictures(currentPictures - 1)
      console.log("retour au départ")
      console.log(currentPictures)
    }
  }

  const goRight = () => {
    if (currentPictures < picturesArray.length - 1) {
      setCurrentPictures(currentPictures + 1)
      console.log("clic droit")
      console.log(currentPictures)
    } else {
      setCurrentPictures(0)
      console.log("retour au départ")
      console.log(currentPictures)
    }
  }

  return (
    <div className="carousel-container">
      <button onClick={() => goLeft()}>
        <img src="/images/fleche-gauche.png" alt="chevron gauche" />
      </button>
      <img
        src={picturesArray[currentPictures]}
        alt={props.alt + " " + currentPictures}
      />
      <button onClick={() => goRight()}>
        <img src="/images/fleche-droite.png" alt="chevron droit" />
      </button>
    </div>
  )
}

export default Carousel
