import React,{useEffect} from 'react'
import { ProjectWrapper} from './style'
import {Row,Col,Tabs} from 'antd'
import {ArrowDownOutlined} from '@ant-design/icons'
import {gsap} from 'gsap'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
const ProjectSection = ({img,projectName,projectDes,projectTech,ID})=>{

    let srcollHeight

    useEffect(()=>{
        gsap.registerPlugin(ScrollToPlugin)
        srcollHeight=window.innerHeight*2
    })

    
    const backAnimation = () => {
        console.log(`${srcollHeight}px`)
        gsap.to(window, 1, { scrollTo: srcollHeight})
    }
    
    return (
        
        <ProjectWrapper className="project-section" id={ID} backgroundColor="#f9f9f9">

            <Row type='flex' justify='space-around'>
                
                <Col xl={12} lg={12} md={20} sm={22} xs={22}>
                    <div className="project-img">
                        
                    </div>
                </Col>

                <Col xl={12} lg={12} md={20} sm={22} xs={22}>
                    <h5>Manga List Project</h5>
                    <Tabs>
                        <Tabs.TabPane key="0" tab={<h6>Description</h6>}>
                            <div className="tabDes">
                                {projectDes}
                            </div>
                        </Tabs.TabPane>

                        <Tabs.TabPane key="1" tab={<h6>Tech Stack</h6>}>
                            <div>
                                des
                            </div>
                        </Tabs.TabPane>
                    </Tabs> 
                </Col>

             </Row>    

            <Row type='flex' justify='center'>
                <Col span={24} align="center">
                    <div className="back-button" onClick={() => { backAnimation() }}>
                        <div className="verticalLine"></div>
                        Next
                        <ArrowDownOutlined className="icon" /> 
                    </div>
                </Col>
            </Row>

        </ProjectWrapper>
        
    )
}

export default ProjectSection