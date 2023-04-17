import React from "react"
import { useNavigate } from "react-router-dom"

const Card = ({ accommodationData }) => {
  // function to handle redirection to the accomodation page
  let navigate = useNavigate()
  const redirectAccomodation = (userId) => {
    navigate("/logement/" + userId)
  }

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
