import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import eduStyles from "./edu.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FeaturedEdu = () => (
  <StaticQuery
    query={graphql`
      query {
        edu: file(relativePath: { eq: "edu-hero.png" }) {
          childImageSharp {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.edu.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={eduStyles.hero}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className={eduStyles.rectangles}></div>
          <div className={eduStyles.triangles}></div>
          <div className={eduStyles.row}>
            <div className={eduStyles.text}>
              <h2>
                Table <span>Edu</span>
              </h2>
              <p>
                Desde 2015, compartilhamos nosso conhecimento e nossas
                metodologias com profissionais de comunicação, estudantes,
                empresários e outros interessados em planejamento e criação de
                conteúdo, social media e comunicação digital. Saiba mais.
              </p>
            </div>
            <div className={eduStyles.links}>
              <Link to="/">
                <div className={eduStyles.cardLink}>
                  <FontAwesomeIcon icon="external-link-alt" className="fa-lg" />
                  <h6>Curso de Social Media</h6>
                </div>
              </Link>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default FeaturedEdu
