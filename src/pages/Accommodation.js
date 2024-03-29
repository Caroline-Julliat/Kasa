import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../helpers/useFetch"
import Carousel from "../components/Carousel"
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"
import { useNavigate } from "react-router-dom"

const Accomodation = () => {
  const { accommodationId } = useParams()
  const { data, loading, error } = useFetch("../accommodationData.json")
  const [accommodationData, setAccommodationData] = useState(null)

  // function to handle redirection to 404 page
  let navigate = useNavigate()
  const redirect404 = () => {
    navigate("/not-found")
  }

  // When data is loaded, we test if the id corresponds to an existing accommodation otherwise we redirect to the 404 page
  useEffect(() => {
    if (data) {
      let datalist = data.find((i) => i.id === accommodationId)
      if (datalist === undefined) {
        redirect404()
      }
      setAccommodationData(datalist)
    }
  }, [data, accommodationId, loading])

  // PAGE VIEW
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
  } else if (accommodationData) {
    // if accomodation data is not null => we display the page content
    return (
      <div className="accommodation">
        <article>
          <Carousel
            pictures={accommodationData.pictures}
            alt={accommodationData.title}
          />
          <div className="accommodation-details">
            <div className="accommodation-details__1">
              <h1>{accommodationData.title}</h1>
              <p>{accommodationData.location}</p>
              {accommodationData.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="accommodation-details__2">
              <div className="accommodation-details__2owner">
                <p>{accommodationData.host.name}</p>
                <div className="owner-picture">
                  <img src={accommodationData.host.picture} alt="" />
                </div>
              </div>
              <div className="owner-flex"></div>
              <Rating rating={accommodationData.rating} />
            </div>
          </div>
          <div className="accommodation-collapse">
            <Collapse
              title={"Description"}
              content={accommodationData.description}
            />
            <Collapse
              title={"Équipements"}
              content={accommodationData.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            />
          </div>
        </article>
      </div>
    )
  }
}

export default Accomodation
