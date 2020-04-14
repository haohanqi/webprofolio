import React from 'react';
import {ProjectItemWapper,Title,TitleWapper,} from './style';
import ProjectItem from './ProjectItem'
import {Row,Col} from 'antd'


const ProjectItemSection =()=> {
    
        return (
            <ProjectItemWapper id="project">
                 <Row tyle='flex' justify='center'>
                     <Col span={12} data-sal='zoom-in' data-sal-delay="400"> 
                        <TitleWapper white>
                           <Title color='white' size='3.5vw'  textAlign='left'>PROJECTS</Title>
                           <span style={{border:`1px solid white`}}></span>
                        </TitleWapper>
                     </Col>
                 </Row>
                 
                 <Row tyle='flex' justify='space-around'>
                      <Col xs={24} md={8} align='center' data-sal='flip-up' data-sal-delay="600" data-sal-duration="600">
                            <ProjectItem title='Manga Project' 
                                         name='Harry'
                                         description='This is a manga project. Allow user to watch manga and animation online'
                                         imgSrc='https://images.unsplash.com/photo-1548827752-6301e20b3be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                                         githubLink='https://github.com/haohanqi/Apiassignment'
                                         />
                      </Col>
                      
                      <Col xs={24} md={8} align='center' data-sal='flip-up' data-sal-delay="750" data-sal-duration="600">
                            <ProjectItem title='Holiday Calendar App'
                                         name='Sangini'
                                         description='This is an Android App, which allows user to check holidays on Calender.'
                                         imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8Y7Ywsj_camcxPS7jYtroWZ2Ph5I_Qdhp3BVOP8pexIyELbLF&usqp=CAU'
                                         githubLink='https://github.com/sanginigupta/Holiday_Calender_App' />
                      </Col>
                      
                      <Col xs={24} md={8} align='center' data-sal='flip-up' data-sal-delay="800" data-sal-duration="600">
                                 <ProjectItem title='Zoom Project' 
                                              name='aniket'
                                              description='This is a zoom project. Allow user to share screen and present the presentation.'
                                              imgSrc='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
                                              githubLink='https://github.com/patelaniket23'
                      />
                      </Col>

                     
                 </Row>
            </ProjectItemWapper>
        );
 
}

export default ProjectItemSection;