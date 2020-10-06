import React from "react"
import clientStyles from "./clients.module.scss"
import { StaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image" // to take image data and render it
import { Link } from "gatsby"

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
                fluid(maxWidth: 200) {
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

function FeaturedClients(props) {
  return (
    <section
      className={clientStyles.wrapper}
      data-sal="slide-up"
      data-sal-delay="30"
      data-sal-easing="ease"
    >
      <div className={clientStyles.box}>
        <div className={clientStyles.title}>
          <h3>Já atendemos</h3>
          <div className={clientStyles.line}></div>
        </div>
        <div className={clientStyles.gallery}>
          <div className={clientStyles.image}>
            <Image filename={"logo-test.png"} alt="" />
          </div>
          <div className={clientStyles.image}>
            <Image filename={"logo-test.png"} alt="" />
          </div>
          <div className={clientStyles.image}>
            <Image filename={"logo-test.png"} alt="" />
          </div>
          <div className={clientStyles.image}>
            <Image filename={"logo-test.png"} alt="" />
          </div>
          <div className={clientStyles.image}>
            <Image filename={"logo-test.png"} alt="" />
          </div>
        </div>
        <div className={clientStyles.buttons}>
          <Link to="/">
            <button className="primary">Todos os cases</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedClients
