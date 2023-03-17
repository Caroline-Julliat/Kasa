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
          <div className="accommodation-carousel">
            <Carousel
              pictures={accommodationData.pictures}
              alt={accommodationData.title}
            />
          </div>
          <div className="accommodation-details">
            <div className="accommodation-details__container1">
              <h1>{accommodationData.title}</h1>
              <p>{accommodationData.location}</p>
              <ul>
                {accommodationData.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="accommodation-details__container2">
              <div className="accommodation-details__owner">
                <p>{accommodationData.host.name}</p>
                <img src={accommodationData.host.picture} alt="" />
              </div>
              <div className="accommodation-details__rating">
                <Rating rating={accommodationData.rating} />
              </div>
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
