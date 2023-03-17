import React from "react"

const Rating = ({ rating }) => {
  let urlArray = []

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      urlArray.push("/images/etoile-pleine.png")
    } else {
      urlArray.push("/images/etoile-vide.png")
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
