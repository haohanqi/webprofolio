import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HarryProduct from '../components/HarryProduct'
import SanginiProduct from '../components/SanginiProduct'
import AniketProduct from '../components/AniketProduct'

const SecondPage = () => (
  <Layout>
  <SEO title="Product Page" />
  <HarryProduct/>
  <SanginiProduct/>
  <AniketProduct/>
  </Layout>
)

export default SecondPage
