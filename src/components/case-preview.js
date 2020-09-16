import React from "react"
import { Link } from "gatsby"

const CasePreview = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default CasePreview