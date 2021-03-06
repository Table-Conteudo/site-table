// import React from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const BlogPostTemplate = ({ data, pageContext, location }) => {
//   const post = data.markdownRemark
//   const siteTitle = data.site.siteMetadata.title
//   const { previous, next } = pageContext

//   return (
//     <Layout location={location}>
//       <SEO
//         title={post.frontmatter.title}
//         description={post.frontmatter.description || post.excerpt}
//       />
//       <article>
//         <header>
//           <h1
//             style={{
//               marginBottom: 0,
//             }}
//           >
//             {post.frontmatter.title}
//           </h1>
//           <p
//             style={{
//               display: `block`,
//             }}
//           >
//             {post.frontmatter.date}
//           </p>
//         </header>
//         <section dangerouslySetInnerHTML={{ __html: post.html }} />
//         <hr
//           style={{
//           }}
//         />
//         <footer>
//         </footer>
//       </article>

//       <nav>
//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0,
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.fields.slug} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={next.fields.slug} rel="next">
//                 {next.frontmatter.title} →
//               </Link>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </Layout>
//   )
// }

// export default CaseTemplate

// export const pageQuery = graphql`
//   query CaseBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `
