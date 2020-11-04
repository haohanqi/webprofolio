import React,{useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroductionSection from "../components/homePage/IntroductionSection"
import SkillSection from '../components/homePage/SkillSection'
import JobSection from '../components/homePage/JobSection'
import TimelineSection from "../components/homePage/TimelineSection"
import Experience from '../components/homePage/Experience'
import BlogSection from "../components/homePage/BlogSection"
import Footer from "../components/homePage/Footer"
import Overlay from "../components/homePage/Overlay"
import IntroOverlay from '../components/homePage/IntroOverlay'
import gsap from 'gsap'
import homeContent from '../pageContent/index.json'
import { GlobalFontFamily} from '../components/basicStyle'

const IndexPage = ({data}) =>{

  useEffect(()=>{
    let t1 = gsap.timeline()

    t1.set(document.body,{overflow:'hidden'})
    .to(".main",0,{overflowY:'hidden'})
    .from('.overlay-text',1.4,{
      y:"100",
      ease:"power4.out",
      skewY:7,
    }).to('.overlay-text', 0.6, { 
      ease: "power4.out", display: "none"
    }
    ).to(".overlay-container",2,{
      height:0,
      ease:"power4.out"
    }).from(
      ".intro-overlay-text",1,{
        y: "100",
        opacity:0,
        ease: "power4.out",
        skewY: 7,
      }
    ).to(".intro-overlay-text",1,{
      width:"40%",
      ease: "power4.out",
      stagger:0.6
    }).to(".intro-overlay-text",0.6,{
      ease: "power4.out", display: "none", 
    }
    ).to(".intro-overlay-container",0.6,{
      width:0,
      display: "none",
      ease: "expo.inOut",
    }).from(".intro-background-title", 0.6,{ opacity: 0, x: 200, ease: 'power4.in' })
      .from(".intro-background-img",0.6,{opacity:0, y:-100, ease:'power4.in'})
      .from(".intro-background-content", 0.6, { opacity: 0, x: -200, ease: 'power4.in' })
      .from(".next-button-container", 1 ,{ opacity:0, border:'1px solid black', ease:'power4.in'})
      .from(".icon-text", 0.6, { opacity: 0, y: 30, ease: 'power4.in' })
      .from(".icon", 0.6, { opacity: 0, y: -30, ease: 'power4.in' })
      .from(".next-button-container", 0.6, { y: -100, repeat:2, yoyo:true})
}, [])

  return (
    (
      <Layout>
        <SEO title="Home" />
        <GlobalFontFamily/>
        <Overlay />
        <IntroOverlay/>
        <IntroductionSection content={homeContent.aboutSection}/>
        <JobSection content={homeContent.workSection}/>
        <SkillSection content={homeContent.skillSection}/>
        <TimelineSection />
        <Experience />
        <BlogSection data={data} />
        <Footer />
      </Layout>
    )
  )


} 

//loading all the blog md file
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            author
          }
        }
      }
    }
  }`

export default IndexPage
