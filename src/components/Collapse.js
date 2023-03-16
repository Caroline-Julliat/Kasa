import React, { useState } from "react"

const Collapse = (props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className="collapse-container"
      onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
    >
      <div className="collapse-button">
        <h2>{props.title}</h2>
        <img
          src={isActive ? "/images/fleche-haut.png" : "/images/fleche-bas.png"}
          alt="chevron"
        />
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
