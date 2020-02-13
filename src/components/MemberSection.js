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
            <MemberWapper>
                
                <Row type='flex' justify='start'>
                     <Col span={12} > 
                       <TitleWapper>
                          <Title color='white' size='35px'  textAlign='left'>TEAM MEMBERS</Title>
                          <span></span>
                       </TitleWapper>    
                     </Col>
                </Row>
                
                <Row type='flex' justify='space-around' align='middle'>   
                   
                    <Col span={6} align='center'>
                        <IdentityCard title='Hao HanQi' />
                    </Col>
                    
                    <Col span={6} align='center'>
                        <IdentityCard/>
                    </Col>
                    
                    
                    <Col span={6} align='center'>
                        <IdentityCard title='HanQi Hao' description={<Description position='FrontEnd Developer' education='York University (CS degree)' ws='JS CSS React Gatsby'/>}/>
                    </Col>   
                </Row>
            </MemberWapper>
        );
 
}

export default MemberSection;