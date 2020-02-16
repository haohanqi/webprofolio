import React, { Component } from 'react';
import {MemberWapper,Title,TitleWapper} from './style'
import {Row,Col} from 'antd'
import IdentityCard from './IdentityCard'

const MemberSection =()=> {
    
    const Description = ({position,education,ws})=>{
        return (
            <p style={{textAlign:'left'}}>
            
                  <b>Position</b>: {position}<br/><br/> 
                  <b>Education</b>: {education} <br/><br/>
                  <b>Work Skills</b>: {ws}
            </p>
        )
    }

        return (
            <MemberWapper id='team'>
                
                <Row type='flex' justify='start'>
                     <Col span={12} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="400" > 
                       <TitleWapper>
                          <Title color='black' textAlign='left'>TEAM MEMBERS</Title>
                          <span black></span>
                       </TitleWapper>    
                     </Col>
                </Row>
                
                <Row type='flex' justify='space-around' align='middle'>   
                   
                    <Col xs={18} md={6}align='center' data-sal='fade' data-sal-delay="600" data-sal-duration="700">
                        <IdentityCard title='Hao HanQi' />
                    </Col>
                    
                    <Col xs={18} md={6} align='center' data-sal='fade' data-sal-delay="750" data-sal-duration="700">
                        <IdentityCard/>
                    </Col>
                    <Col xs={18} md={6} align='center' data-sal='fade' data-sal-delay="850" data-sal-duration="700">
                        <IdentityCard title='HanQi Hao' description={<Description position='FrontEnd Developer' education='York University (CS degree)' ws='JS CSS React Gatsby'/>}/>
                    </Col>   
                </Row>
            </MemberWapper>
        );
 
}

export default MemberSection;