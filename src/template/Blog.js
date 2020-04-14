import React from 'react';
import {graphql} from 'gatsby'
import {Row,Col} from 'antd'
import Author from './componments/Author'
import './style.css'
import Header from '../components/header'
import Layout from '../components/layout'

export default function Blog ({data}){
    console.log(data)
    const {markdownRemark}=data
    const {html,frontmatter} = markdownRemark
    return (
    <Layout>
       <Header/>
       <div className = 'container'>
        
          <Row type='flex' justify='start'>
             <Col xs={20} md={12} align='center'>
                 <div className='head'>Team ASH Blog</div>
              </Col>
          </Row>

          <Row type='flex' justify='start'>
              <Col xs={20} >
                 <div className='title'>{frontmatter.title}</div>
             </Col>
          </Row>
        
        <Row type='flex' justify='start'>
             <Col xs={20} >
               <div className='date'>{frontmatter.date}</div>
             </Col>
        </Row>

        <Row type='flex' justify='start'>
             <Col xs={24} >
                <Author name={frontmatter.author}/>
             </Col>
        </Row>
          
       <Row type='flex' justify='center'>
           <Col xs={24}>
              <div className="blog-content-container" dangerouslySetInnerHTML={{__html:html}}></div>
          </Col>
       </Row> 
        
  </div>

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
      author
    }
  }
}
`