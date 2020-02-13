import React, { Component } from 'react';
import {graphql} from 'gatsby'
import {Row,Col} from 'antd'
import Author from './componments/Author'
import './style.css'

export default function Blog ({data}){
    console.log(data)
    const {markdownRemark}=data
    const {html,frontmatter} = markdownRemark
    return (
        <div className = 'container'>
        
        <Row type='flex' justify='start'>
            <Col span={12} align='center'>
               <div className='head'>Team ASH Blog</div>
            </Col>
        </Row>

        <Row type='flex' justify='start'>
            <Col span={12} >
               <div className='title'>{frontmatter.title}</div>
            </Col>
        </Row>
        
        <Row type='flex' justify='start'>
             <Col span={12} >
               <div className='date'>{frontmatter.date}</div>
             </Col>
        </Row>

        <Row type='flex' justify='start'>
             <Col span={12} >
                <Author name={frontmatter.author}/>
             </Col>
        </Row>
          
       <Row type='flex' justify='center'>
           <Col span={20} >
              <div className="blog-content-container" dangerouslySetInnerHTML={{__html:html}}></div>
          </Col>
       </Row> 
        
  </div>

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