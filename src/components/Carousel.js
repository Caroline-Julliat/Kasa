import React from "react"

const Carousel = (props) => {
  return (
    <div className="carousel-container">
      <h1>Carousel</h1>
      <img src={props.imageSrc} alt={props.alt} />
    </div>
  )
}

export default Carousel
