import React from "react"
import { useNavigate } from "react-router-dom"

const Card = ({ accommodationData }) => {
  const redirectAccomodation = (userId) => {
    navigate("/logement/" + userId)
  }
  let navigate = useNavigate()

  return (
    <React.Fragment>
      {accommodationData.map((accommodation) => (
        <article
          className="accomodation-card"
          key={accommodation.id}
          onClick={() => redirectAccomodation(accommodation.id)}
        >
          <div className="card-image-wrapper">
            <img src={accommodation.cover} alt={accommodation.title} />
          </div>
          <h1>{accommodation.title}</h1>
        </article>
      ))}
    </React.Fragment>
  )
}

export default Card
