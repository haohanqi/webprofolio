import React,{useEffect} from "react"
import NavHeader from '../components/NavHeader'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HarryProduct from '../components/HarryProduct'
import ProductIntro from '../components/ProductIntro'
const SecondPage = () => {

  return (
    <Layout>
      <SEO title="Product Page" />
      <NavHeader color="black" />
      <ProductIntro />
      <HarryProduct />
    </Layout>
  )
}
  
  

export default SecondPage
