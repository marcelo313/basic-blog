import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (  
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <p>Thank you for visiting my website.</p>
    <p>I hope you have fun while you're here.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
