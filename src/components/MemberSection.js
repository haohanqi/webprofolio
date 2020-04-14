import React from 'react';
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
                   
                    <Col xs={18} md={6} align='center' data-sal='fade' data-sal-delay="600" data-sal-duration="700">
                    <IdentityCard 
                        title='Aniket' 
                        imgSrc='https://images.unsplash.com/photo-1565656898731-61d5df85f9a7?ixlib=rb-1.2.1&w=1000&q=80'
                        avatarSrc='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                        description={<Description position='FrontEnd Developer' education='York University (CS degree)' ws='JS CSS React Gatsby'/>} />
                    </Col>
                    
                    <Col xs={18} md={6} align='center' data-sal='fade' data-sal-delay="750" data-sal-duration="700">
                        <IdentityCard 
                         title='Sangini'
                         imgSrc='https://images.unsplash.com/photo-1521158422-e44de3484714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
                         avatarSrc='https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                         description={<Description position='FrontEnd Developer' education='York University (CS degree)' ws='JS CSS React Gatsby'/>}/>
                         
                    </Col>
                    <Col xs={18} md={6} align='center' data-sal='fade' data-sal-delay="850" data-sal-duration="700">
                        <IdentityCard 
                        title='HanQi Hao' 
                        imgSrc='https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
                        avatarSrc='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                        description={<Description position='FrontEnd Developer' 
                                                  education='York University (CS degree)' 
                                                  ws='JS CSS React Gatsby'/>}/>
                    </Col>   
                </Row>
            </MemberWapper>
        );
 
}

export default MemberSection;