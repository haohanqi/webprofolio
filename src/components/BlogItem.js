import React from 'react';
import { Link } from "gatsby"
import {Row,Col,Button} from 'antd';
import {BlogItemWapper} from './style'

const BlogItem = ({data})=> {
    
    return (
        <BlogItemWapper>
            
            <Row type='flex' justify='start'>
               <Col span={24} align='left'>
                   <div className='title'>{data ? data.node.frontmatter.title:""} </div>
               </Col>
            </Row>

            <Row type='flex' justify='start'>
               <Col span={24} align='left'>
                   <div className='date'>{data ? data.node.frontmatter.date:""}</div>
               </Col>
            </Row>

            <Row type='flex' justify='start'>
               <Col span={24} align='left'>
                   <div className='author'>Author: {data?data.node.frontmatter.author:""}</div>
               </Col>
            </Row>
            
            <Row type='flex' justify='start'>
                <Col span={24} align='left'>
                    <div className='content'>{data?data.node.excerpt:""} </div>
                </Col>
            </Row>

            
            <Row type='flex' justify='start'>
               <Col span={24} align='left'>
                  <Button type="primary"><Link to={data ? data.node.frontmatter.path:""}>Read More</Link></Button>
               </Col>
            </Row>
            
        </BlogItemWapper>
    );

   }       
    
  


export default BlogItem;