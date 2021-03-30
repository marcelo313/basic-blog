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

    <div class="rounded-xl p-4" style={{
        color: `#3B3B3B`
      }}>
      <h2 class="p-2 text-xl" style={{
        backgroundColor: `#417b9b`,
        color: `#f8f8f8`
      }}>This is a test component</h2>
      <p class="p-2">The purpose of this component is to mess with it and see TailwindCSS in action.</p>
      <p class="p-2">TailwindCSS is a powerful tool that allows us to quickly change the types of styling we include in our web applications with a powerful utility-first approach.</p>
    </div>

    <div>
      <h2>This is another test component</h2>

      <div 
      class="p-3"
      style={{
        backgroundColor: `#FF5F02`,
      }}>
        <div 
        style={{
          // maxWidth: 960,
          backgroundColor: `#FE953C`,
          color: `#5A4F3E`,
          padding: `1.45rem 1.0875rem`,
        }}>
          <p>This component is to test different color combinations for my branding</p>
        </div>
      </div>
      

      <div class="pb-8"
      style={{ 
        backgroundColor: `#B5CEC8`, 
        color: `#383838`,
        padding: `1.45rem 1.0875rem`,

      }}>
        <p>This is in a different text style</p>
      </div>
      
    </div>
    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
