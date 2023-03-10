import React from "react"

const Banner = (props) => {
  return (
    <div className="banner-container">
      <img src={props.imageSrc} alt="" />
      <h1>{props.title}</h1>
    </div>
  )
}

export default Banner
