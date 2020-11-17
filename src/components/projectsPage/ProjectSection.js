import React,{useEffect} from 'react'
import { ProjectWrapper} from './style'
import {Row,Col,Tabs} from 'antd'
import {ArrowDownOutlined} from '@ant-design/icons'
import {gsap} from 'gsap'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'


export default function ProjectSection({ img, projectName, projectDes, projectTech, ID,nextId,last=false }){

    useEffect(()=>{
        gsap.registerPlugin(ScrollToPlugin)
    })

    const nextAnimation = () => {
        gsap.to(window, 1.5, { scrollTo: `#${nextId}`})
    }

    const backToTopAnimation = () =>{
        gsap.to(window, 3, { scrollTo: '0' })
    }

    const backToTopButton = ()=>{
        return (
            <div className="backToTop-button" role="backToTop-button" onClick={()=>{backToTopAnimation()}}>
                Back To Top
            </div>
        )
    }

    const nextButton = ()=>{
        return (
            <div className="next-button" role="click-button" onClick={() => { nextAnimation() }}>
                <div className="verticalLine"></div>
                     Next
                <ArrowDownOutlined className="icon" />
            </div>
        )
    }
    
    return (
        
        <ProjectWrapper className="project-section" id={ID} backgroundColor="#f9f9f9">

            <Row type='flex' justify='space-around' align="middle" style={{height:"100%"}}>
                
                <Col xl={10} lg={10} md={20} sm={22} xs={22} 
                     data-sal='slide-right'
                     data-sal-delay="400"
                     data-sal-duration="600"
                >
                    <div className="project-img-container">
                        <img className="project-img" src={img} alt="projectImg" height="100%" width="100%"/>
                    </div>
                    
                    {
                        last ? backToTopButton(): nextButton()
                    }
                </Col>

                <Col xl={12} lg={12} md={20} sm={22} xs={22}
                     data-sal='slide-left'
                     data-sal-delay="400"
                     data-sal-duration="600"
                >
                    <h5>{projectName}</h5>
                    <Tabs>
                        <Tabs.TabPane key="0" tab={<h6>Description</h6>}>
                            <div className="tabDes">
                                {projectDes}
                            </div>
                        </Tabs.TabPane>

                        <Tabs.TabPane key="1" tab={<h6>Tech Stack</h6>}>
                            <div className="tabDes">
                                {projectTech}
                            </div>
                        </Tabs.TabPane>
                    </Tabs> 
                </Col>

             </Row>    

        </ProjectWrapper>
        
    )
}


