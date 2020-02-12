import React, { Component } from 'react';
import {IntroWapper,Title,Tag} from './style'
import {Row,Col,Icon} from 'antd'
const IntroductionSection = ()=>{
        return (
            <IntroWapper>
               
               <Row  type="flex" justify='center' >
                   <Col span={10}> 
                       <Title color="white" size='35px' textAlign='center'>WE ARE ASH</Title>
                   </Col>
               </Row>
               
               <Row  type="flex" justify='center'>
                   <Col span={12}> 
                     <div className='description'>The Most Creative FrontEnd Developer Team.</div>
                     <div className='description'>Bring You The Best Products In Canada.  </div>
                     <div className='description'>Accuracy</div>
                     <div className='description'>Success</div>
                     <div className='description'>Hardwork</div>
                     <div className='description'>We Are Aniket Singini Harry</div>             
                   </Col>  
               </Row>

               <Row type="flex" justify='space-around' >
                    <Col span={4} align="center"> 
                       <Tag>
                         <Icon type="code"/> TEAM MEMBERS 
                       </Tag>
                    </Col>
                     
                    <Col span={4} align="center">
                      <Tag>
                        <Icon type="code"/> PROJECT
                      </Tag>
                    </Col>
                     
                    <Col span={4} align="center">
                      <Tag>
                        <Icon type="code"/> TIMELINE
                      </Tag>
                    </Col>    
                    
                    <Col span={4} align="center">
                      <Tag>
                        <Icon type="code"/> BLOGS
                      </Tag>
                    </Col>    
               </Row>
      
                
            </IntroWapper>
        );
    
}

export default IntroductionSection;