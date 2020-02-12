import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroductionSection from "../components/IntroductionSection"
import MemberSection from "../components/MemberSection"
import ProjectItemSection from "../components/ProjectItemSection"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroductionSection/>
    <MemberSection/>
    <ProjectItemSection/>
  </Layout>
)

export default IndexPage
