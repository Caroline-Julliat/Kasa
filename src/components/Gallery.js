import axios from "axios"
import React, { useEffect, useState } from "react"
import Card from "./Card"

const Gallery = () => {
  const [accommodationData, setAccommodationData] = useState([])

  useEffect(() => {
    axios
      .get("accommodationData.json")
      .then((res) => setAccommodationData(res.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="gallery-container">
      <Card accommodationData={accommodationData} />
    </div>
  )
}

export default Gallery
