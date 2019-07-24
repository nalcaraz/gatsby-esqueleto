import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Jumbotron, Button } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron>
      <h1>Welcome to Esqueleto home page</h1>
      <p>
        This is a simple starter skeleton to get your site up and running with
        GatsbyJS and React Bootstrap.
      </p>
    </Jumbotron>
  </Layout>
)

export default IndexPage
