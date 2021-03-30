import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MeditationButton from "../components/meditation-button"

const MeditationPage = () => (  
  <Layout>
      <SEO title="Meditation"></SEO>
    <h1>Welcome to the Meditation Page</h1>

    <MeditationButton></MeditationButton>
  </Layout>
)

export default MeditationPage
