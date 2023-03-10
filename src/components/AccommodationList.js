import axios from "axios"
import React, { useEffect, useState } from "react"

const AccommodationList = () => {
  const [accommodationData, setAccommodationData] = useState([])

  useEffect(() => {
    axios
      .get("accommodationData.json")
      .then((res) => setAccommodationData(res.data))
      .catch((error) => console.log(error))
  })

  return (
    <div className="accommodation-container">
      {accommodationData.map((accommodation) => (
        <article>
          <img src={accommodation.cover} alt={accommodation.title} />
          <h1>{accommodation.title}</h1>
        </article>
      ))}
    </div>
  )
}

export default AccommodationList
