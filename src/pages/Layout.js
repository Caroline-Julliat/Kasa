import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = () => {
  return (
    <div className="layout">
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
