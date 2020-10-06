import React from "react"
import Tabs from "./tabs"
// import ContentBox from "./content-box"
import ContentTabs from "../../content/copy/content_tabs.yml"

const ContentTypes = () => (
  <section
    className="contentTypes"
    data-sal="slide-up"
    data-sal-delay="0"
    data-sal-easing="ease"
  >
    <div className="title">
      <h1>{ContentTabs.title}</h1>
    </div>
    <Tabs />
  </section>
)

export default ContentTypes
