import React,{useEffect} from "react"
import NavHeader from '../components/NavHeader'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductIntro from '../components/projectsPage/ProductIntro'
import ProjectSection from '../components/projectsPage/ProjectSection'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const ProductPage = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let sections=gsap.utils.toArray(".project-section")
    
    sections.forEach((section,i)=>{
      ScrollTrigger.create({
        trigger:section,
        start:"top top",
        scrub:true,
        pin:true,
        pinSpacing:false,
        toggleActions: "play none none reverse",
        snap: 1 / (sections.length-1),
      })
    })
  })
  

  return (
    <Layout>
      <SEO title="Product Page" />
      <NavHeader color="black" />
      <ProductIntro/>
      <ProjectSection ID={"manga-list-project"} 
                      projectDes={<div>des</div>}
      />
      <ProjectSection ID={"mineral-project"}/>
    </Layout>
  )
}
  
  

export default ProductPage
