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
    <div className="container h-100">
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <img src={eventImage} height="200" />
              <h2 className="text-uppercase text-white font-weight-bold">
                Registration Complete
              </h2>
              <h3 className="text-uppercase text-white font-weight-bold">
                Thank You!
              </h3>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white font-weight-light mb-2"></p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default LandingPage
