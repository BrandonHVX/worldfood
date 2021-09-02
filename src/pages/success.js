import React from "react"
import "../styles/global.css"
import "../styles/style.scss"
import SuccessPage from "../subpages/SuccessPage"
import Services from "../subpages/Services"
import Team from "../subpages/Team"
import End from "../subpages/End"
import Footer from "../components/Footer"

function Index() {
  return (
    <div>
      <SuccessPage />

      <Footer />
    </div>
  )
}

export default Index
