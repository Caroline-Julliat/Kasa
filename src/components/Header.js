import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.svg"

const Header = () => {
  return (
    <header className="header-container">
      <img src={logo} alt="logo Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/accueil">Accueil</Link>
          </li>
          <li>
            <Link to="/a-propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
