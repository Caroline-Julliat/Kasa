import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutUs from "./pages/AboutUs"
import Accomodation from "./pages/Accomodation"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement" element={<Accomodation />} />
        <Route path="/a-propos" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
