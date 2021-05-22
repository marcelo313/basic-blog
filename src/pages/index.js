import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IconCollection from "../components/iconCollection"

const IndexPage = () => (  
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my website.</h1>
    <h2>Hi!</h2>
    <p>This is a website I’ve built completely from the ground up.</p>

    <p>Here are just some of the different technologies I used to build this site:</p>
    <IconCollection></IconCollection>
    
    <p>Here are some of the benefits from building a website this way:</p>
    <ul>
      <li>No heavy bogged down WordPress integrations or generic pre-built themes.</li>
      <li>Customize as much as I want.</li>
      <li>Quickly deploy updates to the cooud as soon as I merge to the main branch.</li>
      <li>It's all open source, and you can check it out here.</li>
    </ul>

    <h2>Thanks for visiting!</h2>
    
    <h1>A Little More About Me</h1>

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
