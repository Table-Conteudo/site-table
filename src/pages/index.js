import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../templates/layout"
// import SEO from "../components/seo"
// import Hero from "../components/hero"
import Hero2 from "../components/hero2"
import ContentTypes from "../components/content-types"
import FeaturedCases from "../components/featured-cases"
import CasePreview from "../components/case-preview"

const Index = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location,
}) => {
  // const siteTitle = data.site.siteMetadata.title
  const Cases = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <CasePreview key={edge.node.id} post={edge.node} />)

  return (
    <Layout location={location}>
      {/* <Hero2 /> */}
      <div className="placeholder"></div>
      <ContentTypes />
      <FeaturedCases>{Cases}</FeaturedCases>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
