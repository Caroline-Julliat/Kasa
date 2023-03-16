import React, { useState } from "react"

const Collapse = (props) => {
  const [isActive, setIsActive] = useState(false)

  const handleCollapse = () => {
    isActive ? setIsActive(false) : setIsActive(true)
    console.log(isActive)
  }

  return (
    <div className="collapse-container" onClick={() => handleCollapse()}>
      <div className="collapse-button">
        <h2>{props.title}</h2>
        <img src="#" alt="chevron" />
      </div>
      <div className="collapse-content">
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Collapse
