import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Gallery = () => {
  const [accommodationData, setAccommodationData] = useState([])
  let navigate = useNavigate()

  const redirectAccomodation = (userId) => {
    navigate("/logement/" + userId)
  }

  useEffect(() => {
    axios
      .get("accommodationData.json")
      .then((res) => setAccommodationData(res.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="gallery-container">
      {accommodationData.map((accommodation) => (
        <article
          key={accommodation.id}
          onClick={() => redirectAccomodation(accommodation.id)}
        >
          <img src={accommodation.cover} alt={accommodation.title} />
          <h1>{accommodation.title}</h1>
        </article>
      ))}
    </div>
  )
}

export default Gallery
