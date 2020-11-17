import React from 'react';
import {graphql} from 'gatsby'
import {Row,Col} from 'antd'
import {BlogWrapper} from './style'
import Layout from '../components/layout'

export default function Blog ({data}){

    const {markdownRemark}=data
    const {html,frontmatter} = markdownRemark
    return (
        <Layout>
        <BlogWrapper>

              <Row type='flex' justify='start'>
                  <Col xs={20} >
                    <h1 className='title'>{frontmatter.title}</h1>
                </Col>
              </Row>
            
            <Row type='flex' justify='start'>
                <Col xs={20} >
                  <div className='date'>{frontmatter.date}</div>
                </Col>
            </Row>

            <Row type='flex' justify='start'>
                <Col xs={24} >
                    Author: Hao HanQi
                </Col>
            </Row>
              
          <Row type='flex' justify='center'>
              <Col xs={24}>
                  <div className="blog-page-content-container" dangerouslySetInnerHTML={{__html:html}}></div>
              </Col>
          </Row> 
            
        </BlogWrapper>

      </Layout>

)
}

export const pageContent = graphql`
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
`