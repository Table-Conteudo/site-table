import React from "react"
import Tabs from "./tabs"
// import ContentBox from "./content-box"
import ContentTabs from "../../site/copy/content_tabs.yml"

const ContentTypes = () => (
  <div className="contentTypes">
    <div className="title">
      <h1>{ContentTabs.title}</h1>
    </div>
    <Tabs />
  </div>
)

export default ContentTypes
