import React from 'react';
import {Title,TitleWapper} from '../basicStyle'
import { BlogsWrapper} from './style' 
import BlogItem from "./BlogItem"
import {Row,Col} from 'antd'

const BlogSection =({data})=> {
    
        return (
            <BlogsWrapper id='blogs'>
               <Row type="flex" justify="start">
                <Col xl={12} lg={12} md={12} sm={24} xs={24} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="800"> 
                     <TitleWapper>
                            <Title color='black' textAlign='left'>BLOGS</Title>
                    </TitleWapper>    
                </Col>
               </Row>
               
               {
                  data.allMarkdownRemark.edges.map((item)=>{
                      return (
                          <Row type="flex" justify="center" style={{marginBottom:'60px'}}>
                              <Col lg={14} xl={14} md={14} xs={24} sm={24}  align="center">
                                <BlogItem data={item}/>
                             </Col>
                         </Row>
                    )
                  })
               }
        
            </BlogsWrapper>
        );
    
}

export default BlogSection;