import React,{useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavHeader from '../components/NavHeader'
import IntroductionSection from "../components/IntroductionSection"
import SkillSection from '../components/SkillSection'
import JobSection from '../components/JobSection'
import TimelineSection from "../components/TimelineSection"
import Experience from '../components/Experience'
import BlogSection from "../components/BlogSection"
import Footer from "../components/Footer"
import Overlay from "../components/Overlay"
import IntroOverlay from '../components/IntoOverlay'
import gsap from 'gsap'


const IndexPage = ({data}) =>{

  useEffect(()=>{
    const t1 = gsap.timeline()

    t1.from('.overlay-text',1.4,{
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
        color:"black",
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
    })
  })

  return (
    (
      <Layout>
        <SEO title="Home" />
        <Overlay />
        <IntroOverlay/>
        <NavHeader color="black" hiddenTitle={false}/>
        <IntroductionSection />
        <JobSection />
        <SkillSection />
        <TimelineSection />
        <Experience />
        <BlogSection data={data} />
        <Footer />
      </Layout>
    )
  )


} 
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

// <div className='blog-container'>
//   {
//     data.allMarkdownRemark.edges.map((item)=>{
//       return (
//         <div className = 'blog-item-container'>
//           <Link className = 'blog-item' style={{display:`block`}} key={item.node.frontmatter.path} to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link>
//           <div className='author'>Written By: {item.node.frontmatter.author}</div>
//           <div className = 'description'> {item.node.excerpt}</div>
//         </div>
//       )
//     })
//   }
//   </div>

export default IndexPage
