import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Carousel from "../components/Carousel"
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"

const Accomodation = () => {
  const [accommodationData, setAccommodationData] = useState(null)
  const { accommodationId } = useParams()

  useEffect(() => {
    axios
      .get("../accommodationData.json")
      .then((res) => res.data)
      .then((resData) => {
        setAccommodationData(resData.filter((i) => i.id === accommodationId)[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [accommodationId])

  return (
    <div className="accommodation">
      {accommodationData ? (
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
      ) : (
        <p>OUPS ERROR</p>
      )}
    </div>
  )
}

export default Accomodation
