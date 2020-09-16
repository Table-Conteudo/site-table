import React from "react"
import contentBoxStyles from "./content-box.module.scss"
import { StaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image" // to take image data and render it

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageFluid = image.node.childImageSharp.fluid
      return <Img alt={props.alt} fluid={imageFluid} />
    }}
  />
)

function ContentBox(props) {
  return (
    <div className={contentBoxStyles.boxWrapper}>
      <div className={contentBoxStyles.box}>
        <div className={contentBoxStyles.image}>
          <Image filename={props.imgSrc} alt={props.imgAlt} />
        </div>
        <div className={contentBoxStyles.body}>
          <h2>
            <span>#</span>
            {props.title}
          </h2>
          <p>{props.content}</p>

          <div className={contentBoxStyles.footer}>
            <div className={contentBoxStyles.cases}>
              <h6>Veja nos cases</h6>
              <div className={contentBoxStyles.line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBox
