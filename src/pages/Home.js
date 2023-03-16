import React from "react"
import Gallery from "../components/Gallery"
import Banner from "../components/Banner"

const Home = () => {
  const mainTitle = "Chez vous, partout et ailleurs"

  return (
    <div className="home">
      <Banner imageSrc={"./images/image-mer.png"} title={mainTitle} />
      <Gallery />
    </div>
  )
}

export default Home
