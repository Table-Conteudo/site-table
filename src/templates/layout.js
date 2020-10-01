import React from "react"
import Nav from "../components/nav"
import Footer from "../components/footer"
import bgStyles from "./background.module.scss"

export default function Layout({ children, location }) {
  return (
    <div className={bgStyles.layout}>
      <Nav />
      <div
        className={location.pathname === "/" ? bgStyles.index : bgStyles.pages}
      ></div>
      <div className={bgStyles.mainContainer}>{children}</div>
      <Footer />
    </div>
  )
}
