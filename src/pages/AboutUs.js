import React from "react"
import Banner from "../components/Banner"

const AboutUs = () => {
  const mainTitle = "Chez vous, partout et ailleurs"

  return (
    <div className="about-us">
      <Banner imageSrc={"./images/image-montagne.png"} title={mainTitle} />
    </div>
  )
}

export default AboutUs
