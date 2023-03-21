import React from "react"
import Gallery from "../components/Gallery"
import Banner from "../components/Banner"
import bgVueMer from "../assets/images/vue-mer.webp"

const Home = () => {
  const mainTitle = "Chez vous, partout et ailleurs"

  return (
    <div className="home">
      <Banner imageSrc={bgVueMer} title={mainTitle} />
      <Gallery />
    </div>
  )
}

export default Home
