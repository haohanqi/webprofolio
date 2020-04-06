import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HarryProduct from '../components/HarryProduct'
import Header from '../components/header.js'

const SecondPage = () => (
  <Layout>
  <SEO title="Product Page" />
  <HarryProduct/>
  </Layout>
)

export default SecondPage
