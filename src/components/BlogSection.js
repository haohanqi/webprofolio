import React from 'react';
import {BlogsWapper,Title,TitleWapper} from './style'
import BlogItem from "../components/BlogItem"
import {Row,Col} from 'antd'

const BlogSection =({data})=> {
    
        return (
            <BlogsWapper id='blogs'>
               <Row type="flex" justify="start">
                <Col span={12} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="800"> 
                     <TitleWapper>
                            <Title color='black' size='4vw' textAlign='left'>BLOGS</Title>
                            <span style={{border:'1px solid black'}}></span>
                    </TitleWapper>    
                </Col>
               </Row>
               
               {
                  data.allMarkdownRemark.edges.map((item)=>{
                     // console.log(item)
                      return (
                        <Row type="flex" justify="center">
                            <Col xs={24} md={14} data-sal='flip-up' data-sal-delay="600">
                                <BlogItem data={item}/>
                            </Col>
                        </Row>
                    )
                  })
               }
        
            </BlogsWapper>
        );
    
}

export default BlogSection;