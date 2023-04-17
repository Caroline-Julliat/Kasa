import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutUs from "./pages/AboutUs"
import Accommodation from "./pages/Accommodation"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route
            path="/logement/:accommodationId"
            element={<Accommodation />}
          />
          <Route path="/a-propos" element={<AboutUs />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/not-found" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
