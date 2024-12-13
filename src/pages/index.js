import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Awards from "../components/Awards"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Portfolio />
    <Awards />
    <Contact />
  </Layout>
)

export const Head = () => <Seo title="Photography Portfolio" />

export default IndexPage
