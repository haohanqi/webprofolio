import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroductionSection from "../components/IntroductionSection"
import MemberSection from "../components/MemberSection"
import TimelineSection from "../components/TimelineSection"
import ProjectItemSection from "../components/ProjectItemSection"
import BlogSection from "../components/BlogSection"
import Footer from "../components/Footer"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <IntroductionSection/>
    <MemberSection/>
    <TimelineSection/>
    <ProjectItemSection/>
    <BlogSection data={data}/>
    <Footer/>
  </Layout>
)
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
