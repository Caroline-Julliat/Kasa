import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header-container">
      <img src="./images/logo-desktop.png" alt="logo" />
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
