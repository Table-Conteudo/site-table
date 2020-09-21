import React from "react"
import Tabs from "./tabs"
// import ContentBox from "./content-box"
import ContentTabs from "../../content/copy/content_tabs.yml"

const ContentTypes = () => (
  <section className="contentTypes">
    <div className="title">
      <h1>{ContentTabs.title}</h1>
    </div>
    <Tabs />
  </section>
)

export default ContentTypes
