import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (  
  <Layout>
    <SEO title="Home" />
    <h1>Coming Soon...</h1>
    <p>Thank you for visiting my website.</p>
    <p>I hope you have fun while you're here.</p>
    <p>There's plenty more coming your way, and this is only the beginning.</p>
    <StaticImage
      src="../images/gatsby-icon.png"
      width={140}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
