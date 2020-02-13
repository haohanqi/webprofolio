import React from 'react';
import {BlogsWapper,Title,TitleWapper} from './style'
import BlogItem from "../components/BlogItem"
import {Row,Col} from 'antd'

const BlogSection =({data})=> {
    
        return (
            <BlogsWapper>
               <Row type="flex" justify="start">
               <Col span={12} > 
                    <TitleWapper>
                        <Title color='black' size='35px' textAlign='left'>BLOGS</Title>
                        <span style={{border:'1px solid black'}}></span>
                    </TitleWapper>    
                </Col>
               </Row>
               
               {
                  data.allMarkdownRemark.edges.map((item)=>{
                     // console.log(item)
                      return (
                        <Row type="flex" justify="center">
                            <Col span={14}>
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