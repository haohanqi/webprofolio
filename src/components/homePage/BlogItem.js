import React from 'react';
import { Link } from "gatsby"
import {Row,Col} from 'antd';
import {BlogItemWrapper} from './style'
import self from '../../images/self.svg'
import blogCover from '../../images/blogCover.svg'

const BlogItem = ({data})=> {
    
    return (
        <>
            <Link to={data?data.node.frontmatter.path:"/"} style={{color:"black"}}>
                <BlogItemWrapper>
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
                                <div className="blog-date">{data ? data.node.frontmatter.date:""}</div>
                            </div>
                        </Col>
                    </Row> 
                </BlogItemWrapper>
            </Link>
        </>
    );

   }
   

    
  


export default BlogItem;