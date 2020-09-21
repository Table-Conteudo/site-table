import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image"
import caseStyles from "./cases.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CasePreview = ({ post }) => (
  <div className={caseStyles.preview}>
    <AniLink cover bg="#F9BF3A" to={post.frontmatter.slug}>
      <div className={caseStyles.overlay}>
        <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
        <div className={caseStyles.footer}>
          <h3 className={caseStyles.title}>{post.frontmatter.title}</h3>
          <FontAwesomeIcon icon="external-link-alt" className="fa-lg" />
          {/* ({post.frontmatter.date}) */}
        </div>
      </div>
    </AniLink>
  </div>
)

export default CasePreview
