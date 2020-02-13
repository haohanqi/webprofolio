import React from 'react';
import {Row,Col,Button} from 'antd';
import {BlogItemWapper} from './style'

const BlogItem = ({data})=> {
    
   

    return (
        <BlogItemWapper>
            <Row type='flex' justify='start'>
               <Col span={22} align='left'>
                   <div className='date'>2020.02.14</div>
               </Col>
            </Row>

            <Row type='flex' justify='start'>
               <Col span={22} align='left'>
                   <div className='title'>{data ? data.node.frontmatter.title:""} </div>
               </Col>
            </Row>

            <Row type='flex' justify='start'>
               <Col span={22} align='left'>
                   <div className='author'>Author: {data?data.node.frontmatter.author:""}</div>
               </Col>
            </Row>
            
            <Row type='flex' justify='start'>
                <Col span={22} align='left'>
                    <div className='content'>{data?data.node.excerpt:""} </div>
                </Col>
            </Row>

            
            <Row type='flex' justify='start'>
               <Col span={22} align='left'>
                  <Button type="primary">Read More</Button>
               </Col>
            </Row>
            
        </BlogItemWapper>
    );

   }       
    
  


export default BlogItem;