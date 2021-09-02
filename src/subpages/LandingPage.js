import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"
import eventImage from "../images/foodtruck.jpg"

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const pageStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "multiply",
    backgroundAttachment: "scroll",
  }

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  return (
    <section id="home" className="container-fluid  page-style">
      <div className="container ">
        <Navbar />
      </div>
      <div className="centerItems">
        <img src={eventImage} alt="" />
      </div>
    </section>
  )
}

export default LandingPage
