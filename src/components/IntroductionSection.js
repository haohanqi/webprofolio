import React from 'react';
import { IntroWapper, Title, Tag, Personal, SocialMediaBar, PersonalImage, PersonalContent, SocialIcon, ContactButton} from './style'
import {Row,Col,Icon} from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'gatsby';
import selfImage from '../../src/images/self.svg'
import facebook from '../../src/images/facebook.png'
import ins from '../../src/images/ins.png'
import linkin from '../../src/images/linkin.png'
import github from '../../src/images/github.png'


const IntroductionSection = ()=>{
        return (
 
    <IntroWapper>
            
    {  /* <Row  type="flex" justify='center' >
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
                     <div className='description' data-sal='fade' data-sal-delay="550" data-sal-duration="3å00">We Are Aniket Sangini Harry</div>   
                     
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
                        <Link to="/#timeline">
                        <Icon type="code"/> TIMELINE
                        </Link>
                      </Tag>
                    </Col>    
                    
                    <Col span={4} align="center" data-sal='flip-up' data-sal-delay="750">
                      <Tag>
                        <Link to="/#blogs">
                          <Icon type="code"/> BLOGS
                        </Link>
                      </Tag>
                    </Col>    
        </Row> */}

            
        <Personal>
          <PersonalImage src={selfImage}/>
          <PersonalContent>
            "Hello EveryOne.

            I am Hanqi Hao. 
            
            WEB DEVELOPER. 

            UI / UX DEVELOPER.
            
            MOBILE APP DEVELOPER."
          </PersonalContent>
              <ContactButton style={{float:"left",marginTop:"40px",marginLeft:"3%"}}>
                Contact Me
                <div className="iconWrapper">
                  <ArrowRightOutlined className="icon"/>
                </div>
              </ContactButton>
        </Personal>
            
        <SocialMediaBar>
          <SocialIcon>
             <a>
               <img src={github}/> 
             </a>
          </SocialIcon>
        
          <SocialIcon>
             <a>
              <img src={facebook}/> 
            </a> 
          </SocialIcon>


          <SocialIcon>
             <a>
              <img src={linkin}/> 
            </a> 
          </SocialIcon>
          
          <SocialIcon>
             <a>
              <img src={ins}/> 
            </a>
          </SocialIcon>
       
       </SocialMediaBar>

        <Row type="flex" justify='space-around' style={{width:"100%"}} >
                    <Col span={4} align="center" data-sal='flip-up' data-sal-delay="600"> 
                       <Tag>
                          <Link to="/#team">
                          <span className="text"> -> Skills </span>
                          </Link>
                       </Tag>
                    </Col>
                     
                    <Col span={4} align="center" data-sal='flip-up' data-sal-delay="650">
                      <Tag>
                        <Link to="/#project">
                         <span className="text"> -> PROJECT</span>
                        </Link>
                      </Tag>
                    </Col>
                     
                    <Col span={4} align="center" data-sal='flip-up' data-sal-delay="700">
                      <Tag>
                        <Link to="/#timeline">
                        <span className="text">-> TIMELINE</span>
                        </Link>
                      </Tag>
                    </Col>    
                    
                    <Col span={4} align="center" data-sal='flip-up' data-sal-delay="750">
                      <Tag>
                        <Link to="/#blogs">
                        <span className="text"> -> BLOGS</span>
                        </Link>
                      </Tag>
                    </Col>    
        </Row> 
                
            </IntroWapper>
        );
    
}

export default IntroductionSection;