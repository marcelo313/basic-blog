/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import BlogPreview from "./blogPreview"



const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            excerpt
            slug
            date(fromNow: true)
          }
        }
      }
    }
  `)

  const nodes = data.allMarkdownRemark.nodes
  const blogPreviews = nodes.map((node) =>
    <li>{node.frontmatter.title}</li>
  )
  console.log(blogPreviews)

  return (
    <li>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <div>
          <h2>Check out My Blog</h2>
          <ul>
            {blogPreviews}
          </ul>
        </div>

        {/* <BlogPreview 
        blogTitle={data.allMarkdownRemark.nodes[0].frontmatter.title || `Blog Title`}
        excerpt={data.allMarkdownRemark.nodes[0].frontmatter.excerpt || `Short description of the blog.`}
        ></BlogPreview>

        <BlogPreview 
        blogTitle={data.allMarkdownRemark.nodes[1].frontmatter.title || `Blog Title`}
        excerpt={data.allMarkdownRemark.nodes[1].frontmatter.excerpt || `Short description of the blog.`}
        ></BlogPreview> */}

        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </li>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
