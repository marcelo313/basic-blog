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

    <div class="rounded-xl bg-purple-100">
      <h2 class="p-2 text-xl">This is a test component</h2>
      <p class="p-2 text-gray-500">The purpose of this component is to mess with it and see TailwindCSS in action.</p>
      <p class="p-2">TailwindCSS is a powerful tool that allows us to quickly change the types of styling we include in our web applications with a powerful utility-first approach.</p>

    </div>
    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
