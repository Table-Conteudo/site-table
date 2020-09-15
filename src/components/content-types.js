import React from "react"
import { HashRouter as Router } from "react-router-dom"
import Tabs from "./tabs"
import ContentBox from "./content-box"

const ContentTypes = () => (
  <div className="contentTypes">
    <div className="title">
      <h1>
        Conteúdo <span>em</span> primeiro lugar
      </h1>
    </div>
    <Router>
      <Tabs
        items={[
          {
            name: "#Feed",
            route: "id1",
            render: () => (
              <div className="wrapper">
                <ContentBox
                  title="Feed"
                  content="Ideal overcome free burying grandeur aversion. Dead morality
                self right superiority passion virtues hope society play of
                snare grandeur. Good oneself burying law good ultimate burying.
                Play justice snare holiest noble sea reason marvelous right."
                />
              </div>
            ),
          },
          {
            name: "Tab #2",
            route: "id2",
            render: () => (
              <p>
                Ideal overcome free burying grandeur aversion. Dead morality
                self right superiority passion virtues hope society play of
                snare grandeur. Good oneself burying law good ultimate burying.
                Play justice snare holiest noble sea reason marvelous right.
              </p>
            ),
          },
          {
            name: "Tab #3",
            route: "id3",
            render: () => (
              <p>
                Inexpedient gains prejudice aversion pious snare noble ocean
                ocean overcome self ubermensch prejudice philosophy. Ocean
                strong sea burying reason ultimate burying spirit. Pious
                christianity decieve endless abstract decrepit abstract. Ocean
                burying depths evil horror suicide mountains fearful depths
                christianity disgust gains horror. Self marvelous passion faith
                against grandeur.
              </p>
            ),
          },
          {
            name: "Tab #4",
            route: "id4",
            render: () => (
              <p>
                Inexpedient gains prejudice aversion pious snare noble ocean
                ocean overcome self ubermensch prejudice philosophy. Ocean
                strong sea burying reason ultimate burying spirit. Pious
                christianity decieve endless abstract decrepit abstract. Ocean
                burying depths evil horror suicide mountains fearful depths
                christianity disgust gains horror. Self marvelous passion faith
                against grandeur.
              </p>
            ),
          },
          {
            name: "Tab #5",
            route: "id5",
            render: () => (
              <p>
                Inexpedient gains prejudice aversion pious snare noble ocean
                ocean overcome self ubermensch prejudice philosophy. Ocean
                strong sea burying reason ultimate burying spirit. Pious
                christianity decieve endless abstract decrepit abstract. Ocean
                burying depths evil horror suicide mountains fearful depths
                christianity disgust gains horror. Self marvelous passion faith
                against grandeur.
              </p>
            ),
          },
          {
            name: "Tab #6",
            route: "id6",
            render: () => (
              <p>
                Inexpedient gains prejudice aversion pious snare noble ocean
                ocean overcome self ubermensch prejudice philosophy. Ocean
                strong sea burying reason ultimate burying spirit. Pious
                christianity decieve endless abstract decrepit abstract. Ocean
                burying depths evil horror suicide mountains fearful depths
                christianity disgust gains horror. Self marvelous passion faith
                against grandeur.
              </p>
            ),
          },
          {
            name: "Tab #7",
            route: "id7",
            render: () => (
              <p>
                Inexpedient gains prejudice aversion pious snare noble ocean
                ocean overcome self ubermensch prejudice philosophy. Ocean
                strong sea burying reason ultimate burying spirit. Pious
                christianity decieve endless abstract decrepit abstract. Ocean
                burying depths evil horror suicide mountains fearful depths
                christianity disgust gains horror. Self marvelous passion faith
                against grandeur.
              </p>
            ),
          },
          {
            name: "Tab #8",
            route: "id8",
            render: () => (
              <p>
                Inexpedient gains prejudice aversion pious snare noble ocean
                ocean overcome self ubermensch prejudice philosophy. Ocean
                strong sea burying reason ultimate burying spirit. Pious
                christianity decieve endless abstract decrepit abstract. Ocean
                burying depths evil horror suicide mountains fearful depths
                christianity disgust gains horror. Self marvelous passion faith
                against grandeur.
              </p>
            ),
          },
          {
            name: "Tab #9",
            route: "id9",
            render: () => (
              <p>
                Inexpedient gains prejudice aversion pious snare noble ocean
                ocean overcome self ubermensch prejudice philosophy. Ocean
                strong sea burying reason ultimate burying spirit. Pious
                christianity decieve endless abstract decrepit abstract. Ocean
                burying depths evil horror suicide mountains fearful depths
                christianity disgust gains horror. Self marvelous passion faith
                against grandeur.
              </p>
            ),
          },
          {
            name: "Tab #10",
            route: "id10",
            render: () => (
              <p>
                Inexpedient gains prejudice aversion pious snare noble ocean
                ocean overcome self ubermensch prejudice philosophy. Ocean
                strong sea burying reason ultimate burying spirit. Pious
                christianity decieve endless abstract decrepit abstract. Ocean
                burying depths evil horror suicide mountains fearful depths
                christianity disgust gains horror. Self marvelous passion faith
                against grandeur.
              </p>
            ),
          },
        ]}
      />
    </Router>
  </div>
)

export default ContentTypes
