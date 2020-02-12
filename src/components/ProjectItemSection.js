import React from 'react';
import {ProjectItemWapper,Title,TitleWapper,} from './style';
import ProjectItem from './ProjectItem'
import {Row,Col} from 'antd'


const ProjectItemSection =()=> {
    
        return (
            <ProjectItemWapper>
                 <Row tyle='flex' justify='center'>
                     <Col span={12}> 
                        <TitleWapper>
                           <Title color='white' size='35px'  textAlign='left'>PROJECTS</Title>
                           <span></span>
                        </TitleWapper>
                     </Col>
                 </Row>
                 
                 <Row tyle='flex' justify='space-around'>
                      <Col span={8} align='center'>
                            <ProjectItem />
                      </Col>
                      
                      <Col span={8} align='center'>
                             <ProjectItem />
                      </Col>
                      
                      <Col span={8} align='center'>
                              <ProjectItem />
                      </Col>
                 </Row>
            </ProjectItemWapper>
        );
 
}

export default ProjectItemSection;