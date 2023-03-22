import React from "react"
import Banner from "../components/Banner"
import bgVueMontagne from "../assets/images/vue-montagne.webp"
import Collapse from "../components/Collapse"

const AboutUs = () => {
  const mainTitle = "à propos"
  const fiabilite =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  const respect =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const service =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  const responsabilité =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

  return (
    <div className="about-us">
      <Banner imageSrc={bgVueMontagne} title={mainTitle} />
      <div className="about-us-collapse">
        <Collapse title={"Fiabilité"} content={fiabilite} />
        <Collapse title={"Respect"} content={respect} />
        <Collapse title={"Service"} content={service} />
        <Collapse title={"Responsabilité"} content={responsabilité} />
      </div>
    </div>
  )
}

export default AboutUs
