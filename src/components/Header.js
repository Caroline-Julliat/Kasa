import React from "react"

const Header = () => {
  return (
    <header className="header-container">
      <img src="./images/logo-desktop.png" alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/a-propos">A Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
