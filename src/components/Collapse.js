import React, { useState } from "react"
import chevronHaut from "../assets/images/chevron-haut.svg"
import chevronBas from "../assets/images/chevron-bas.svg"

const Collapse = (props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className="collapse-container"
      onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
    >
      <div className="collapse-button">
        <h2>{props.title}</h2>
        <img src={isActive ? chevronHaut : chevronBas} alt="chevron" />
      </div>
      <div
        className="collapse-content"
        style={{ display: isActive ? "block" : "none" }}
      >
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Collapse
