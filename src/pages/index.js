import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IconCollection from "../components/iconCollection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <StaticImage
      src="../images/close-up.JPG" alt="self portrait"
      placeholder="blurred"
      layout="fixed"
      width={320}
      formats={["AUTO", "WEBP", "AVIF"]}
      style={{ marginBottom: `1.45rem` }}
    />

    <h3>
      I'm a software engineer, musician, and writer.
    </h3>
    <h4>
      I like to solve problems, write music, share stories, and build systems that work.
    </h4>
    <p>
      I think we all have a unique story to be told, and it is my passion to share those stories with the world and leave our legacy.
    </p>
    <h3>
      I believe in authentic personal connections to unravel the incredible possibilities within each of us.
    </h3>
    <p>
      I believe in embracing the future of technology for the <em>betterment and advancement of all people.</em>
    </p>
    <p>
      I was born and raised in Chicago, IL, USA.
    </p>
    <p>
      Contact me to talk about building your own website, see my work, read my blog, or check out some music I've written!
    </p>

    <h4>This is a website I’ve built completely from the ground up.</h4>

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

  </Layout>
)

export default IndexPage
