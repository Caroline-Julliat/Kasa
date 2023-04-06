import React from "react"
import Card from "./Card"
import useFetch from "../helpers/useFetch"

const Gallery = () => {
  const {
    data: accommodationData,
    loading,
    error,
  } = useFetch("accommodationData.json")

  if (error) console.log(error)

  if (loading) {
    // if loading is true => We display "Loading..."
    return (
      <div className="loading">
        <h2>Chargement...</h2>
      </div>
    )
  } else if (error) {
    // if an error occurs => we display "Loading failed"
    return (
      <div className="error">
        <h2>une erreur s'est produite lors du chargement de la page</h2>
      </div>
    )
  } else {
    // We display the page content
    return (
      <div className="gallery-container">
        <Card accommodationData={accommodationData} />
      </div>
    )
  }
}

export default Gallery
