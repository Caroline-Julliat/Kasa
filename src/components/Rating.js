import React from "react"
import etoilePleine from "../assets/images/etoile-pleine.svg"
import etoileVide from "../assets/images/etoile-vide.svg"

const Rating = ({ rating }) => {
  let urlArray = []

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      urlArray.push(etoilePleine)
    } else {
      urlArray.push(etoileVide)
    }
  }

  return (
    <div className="rating-container">
      {urlArray.map((url, index) => (
        <img key={index} className="rating-star" src={url} alt="icone étoile" />
      ))}
    </div>
  )
}

export default Rating
