import React from "react"
import "../global.css"
import LandingPage from "../subpages/LandingPage"
import Services from "../subpages/Services"
import Team from "../subpages/Team"
import End from "../subpages/End"
import Footer from "../components/Footer"

function Index() {
  return (
    <div>
      <LandingPage />

      <End />
      <Footer />
    </div>
  )
}

export default Index
