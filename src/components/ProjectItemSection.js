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
                 
                 <Row tyle='flex' justify='space-around' >
                      <Col xs={24} md={8} align='center' data-sal='flip-up' data-sal-delay="600" data-sal-duration="600">
                            <ProjectItem />
                      </Col>
                      
                      <Col xs={24} md={8} align='center' data-sal='flip-up' data-sal-delay="750" data-sal-duration="600">
                             <ProjectItem />
                      </Col>
                      
                      <Col xs={24} md={8} align='center' data-sal='flip-up' data-sal-delay="800" data-sal-duration="600">
                              <ProjectItem />
                      </Col>

                      <Col xs={24} md={8} align='center' data-sal='flip-up' data-sal-delay="850" data-sal-duration="600">
                              <ProjectItem />
                      </Col>
                     
                 </Row>
            </ProjectItemWapper>
        );
 
}

export default ProjectItemSection;