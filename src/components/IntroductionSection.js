import React, { Component } from 'react';
import {IntroWapper,Title,Tag} from './style'
import {Row,Col,Icon} from 'antd'
import { Link } from 'gatsby';
const IntroductionSection = ()=>{
        return (
            <IntroWapper>
               
               <Row  type="flex" justify='center' >
                   <Col span={10}>                    
                       <Title color="white"  textAlign='center'>WE ARE ASH</Title>
                   </Col>
               </Row>
               
               <Row  type="flex" justify='center'>
                   <Col xs={16} md={12}> 
                   
                     <div className='description' data-sal='fade' data-sal-delay="300" data-sal-duration="300">The Most Creative FrontEnd Developer Team.</div>
                     <div className='description' data-sal='fade' data-sal-delay="350" data-sal-duration="300">Bring You The Best Products In Canada.  </div>
                     <div className='description' data-sal='fade' data-sal-delay="400" data-sal-duration="300">Accuracy</div>
                     <div className='description' data-sal='fade' data-sal-delay="450" data-sal-duration="300">Success</div>
                     <div className='description' data-sal='fade' data-sal-delay="500" data-sal-duration="300">Hardwork</div>
                     <div className='description' data-sal='fade' data-sal-delay="550" data-sal-duration="3å00">We Are Aniket Singini Harry</div>   
                     
                   </Col>  
               </Row>

               <Row type="flex" justify='space-around' >
                    <Col span={4} align="center" data-sal='flip-up' data-sal-delay="600"> 
                       <Tag>
                          <Link to="/#team">
                            <Icon type="code"/> TEAM 
                          </Link>
                       </Tag>
                    </Col>
                     
                    <Col span={4} align="center" data-sal='flip-up' data-sal-delay="650">
                      <Tag>
                        <Link to="/#project">
                          <Icon type="code"/> PROJECT
                        </Link>
                      </Tag>
                    </Col>
                     
                    <Col span={4} align="center" data-sal='flip-up' data-sal-delay="700">
                      <Tag>
                        <Icon type="code"/> TIMELINE
                      </Tag>
                    </Col>    
                    
                    <Col span={4} align="center" data-sal='flip-up' data-sal-delay="750">
                      <Tag>
                        <Link to="/#blogs">
                          <Icon type="code"/> BLOGS
                        </Link>
                      </Tag>
                    </Col>    
               </Row>
      
                
            </IntroWapper>
        );
    
}

export default IntroductionSection;