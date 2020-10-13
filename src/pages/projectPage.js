import React,{useEffect} from "react"
import NavHeader from '../components/NavHeader'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductIntro from '../components/projectsPage/ProductIntro'
import ProjectSection from '../components/projectsPage/ProjectSection'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projectImage1 from '../images/projectImage1.svg'
import projectImage2 from '../images/projectImge2.svg'
import projectImage3 from '../images/projectImage3.svg'

import trackingNumber from '../components/projectsPage/ProductContent/data/trackingNumberProject.json'
import miningWorld from '../components/projectsPage/ProductContent/data/miningWorldProject.json'
import personalWebsite from '../components/projectsPage/ProductContent/data/personalWebsite.json'
import ProjectDesTemplate from '../components/projectsPage/ProductContent/ProjectDesTemplate'
import ProjectTechTemplate from '../components/projectsPage/ProductContent/ProjectTechTemplate'



const ProjectPage = () => {

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
                      nextId={"mineral-project"}
                      projectName="T A F Landing Page"
                      projectDes={<ProjectDesTemplate data={trackingNumber}/>}
                      projectTech={<ProjectTechTemplate data={trackingNumber}/>}
                      img={projectImage1}
      />
      <ProjectSection ID={"mineral-project"}
                      nextId={"personal-website"}
                      projectName="Mining World App"
                      projectDes={<ProjectDesTemplate data={miningWorld} />}
                      projectTech={<ProjectTechTemplate data={miningWorld} />}
                      img={projectImage2}           
      />
      
      <ProjectSection ID={"personal-website"}
                      projectName="Personal Website"
                      projectDes={<ProjectDesTemplate data={personalWebsite} />}
                      projectTech={<ProjectTechTemplate data={personalWebsite} />}
                      img={projectImage3}
      />
    </Layout>
  )
}
  
  

export default ProjectPage
