import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MyWorkPage = () => (  
  <Layout>
      <SEO title="My Work"></SEO>
    
    <h2>Websites</h2>
    <div>
        <p>
            This entire website was hand-crafted by yours truly using React, Gatsby, Netlify, and Github. 
        </p>
        <p>
            The code to this site is also open source, you can view the repo here. 
        </p>
    </div>

    <h2>Music</h2>
    <div>
        <p>
            Check out my music here! 
        </p>
    </div>

    <h2>Instructional Videos</h2>

    <h2>Testimonials</h2>

    <div>
        <p>
            Not only am I hilarious, but people love working with me, too. 
        </p>
        <p>
            Check out what some past clients have said about our time together.
        </p>
    </div>

  </Layout>
)

export default MyWorkPage
