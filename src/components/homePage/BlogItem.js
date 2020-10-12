import React from 'react';
import { Link } from "gatsby"
import {Row,Col,Button} from 'antd';
import {BlogItemWapper} from '../style'
import self from '../../images/self.svg'
import blogCover from '../../images/blogCover.svg'

const BlogItem = ({data})=> {
    
    return (
        <BlogItemWapper>
            <Row type="flex" justify="start" style={{height:"100%"}}>
                <Col xl={10} lg={10} sm={24} sm={24}>
                    <img className="img-container" src={blogCover}/>
                </Col>


                <Col xl={14} lg={14} sm={24} sm={24} >
                    <div className="blog-content-container">

                        <div className="author-container">
                            <img className="author-avatar" src={self}/>
                            <div className="author-name">Hao HanQi</div>
                        </div>

                        <div className="blog-title">{data ? data.node.frontmatter.title : ""}</div>
                        <div className="blog-subtitle">How to build a personal website with GatsbyAnd Notify CMS</div>
                        <div className="blog-date">2020/10/10</div>
                    </div>
                </Col>
            </Row> 
        </BlogItemWapper>
    );

   }
   
   

// <Row type='flex' justify='start'>
//     <Col span={24} align='left'>
//         <div className='title'>{data ? data.node.frontmatter.title : ""} </div>
//     </Col>
// </Row>

//     <Row type='flex' justify='start'>
//         <Col span={24} align='left'>
//             <div className='date'>{data ? data.node.frontmatter.date : ""}</div>
//         </Col>
//     </Row>

//     <Row type='flex' justify='start'>
//         <Col span={24} align='left'>
//             <div className='author'>Author: {data ? data.node.frontmatter.author : ""}</div>
//         </Col>
//     </Row>

//     <Row type='flex' justify='start'>
//         <Col span={24} align='left'>
//             <div className='content'>{data ? data.node.excerpt : ""} </div>
//         </Col>
//     </Row>


//     <Row type='flex' justify='start'>
//         <Col span={24} align='left'>
//             <Button type="primary"><Link to={data ? data.node.frontmatter.path : ""}>Read More</Link></Button>
//         </Col>
//     </Row>
    
  


export default BlogItem;