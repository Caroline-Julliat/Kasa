import React from "react"
import AccommodationList from "../components/AccommodationList"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Home = () => {
  const mainTitle = "Chez vous, partout et ailleurs"

  return (
    <div className="page-body">
      <div className="wrapper">
        <Header />
        <Banner imageSrc={"./images/image-mer.png"} title={mainTitle} />
        <AccommodationList />
      </div>
      <Footer />
    </div>
  )
}

export default Home
