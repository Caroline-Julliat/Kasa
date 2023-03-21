import React from "react"
import logoBlanc from "../assets/images/logo-blanc.svg"

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={logoBlanc} alt="logo Kasa" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
