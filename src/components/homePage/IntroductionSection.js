import React,{useEffect,useState,useRef} from 'react';
import {Row,Col} from 'antd'
import {ArrowDownOutlined} from '@ant-design/icons'
import {gsap} from 'gsap'
import {Link} from 'gatsby'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { IntroWrapper,IntroBackground } from './style'
import croods from '../../images/croods.svg'


const IntroductionSection = ({content})=>{
  
  const measure = useRef(null)
  const measureContainer = useRef(null)


  useEffect(()=>{
    
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollToPlugin)
   
    measure.current = {
      titleShiftWidth: '',
      verticalShitftHeight: 0
    }
  },[])

  const t1 = gsap.timeline()
  const st1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro-background",
      toggleActions: "play none none none",
      start: "top top",
    }
  })

  const introBackgroundAnimation = ()=>{

    let width = measureContainer.current.offsetWidth

    if (width >= 320 && width <=480){
      measure.current.titleShiftWidth='-50px'
      measure.current.setverticalShitftHeight=80
    }

    if(width >= 720){
      measure.current.titleShiftWidth = '-100px'
      measure.current.setverticalShitftHeight = 120
    }
      
    t1.to(".intro-background", 1, {
        scale:0.8,
        zIndex: 20,
        position:'absolute',
        ease:'power4.out'
      })
        .set(document.body, { overflow: 'auto' })
        .to(window, 3, { scrollTo: '#worksection' })

      st1.to(".intro-background-title",{
        x: measure.current.titleShiftWidth,
        duration: 1,
      }).to(".intro-background-content",{
        y: measure.current.setverticalShitftHeight,
        duration: 1,
      }).to(".intro-background-img",{
        y: measure.current.setverticalShitftHeight,
        duration: 1,
        delay:-1,
      }).to(".next-button-container",{
        y: 20,
        duration: 1,
        delay: -1,
      })
  }

  return (         
    <IntroWrapper backgroundColor="white" ref={measureContainer}>
    
      <IntroBackground className="intro-background">

          <Row>
            <Col>
              <div className='intro-background-title'>Hello! I am HANQI HAO</div>
            </Col>
          </Row>

          <Row type='flex' justify='space-around' align='middle' style={{ height: '80%' }}>
            <Col xl={10} lg={10} sm={20} xs={20} align='center'>
              <div className='intro-background-img'>
                <img className="selfImg" src={croods} width="100%"/>
              </div>
            </Col>

            <Col xl={12} lg={12} sm={20} xs={20}  align="start"> 
              <div className='intro-background-content'>
              <div className="background-content-title">{content.aboutTitle}</div>
                <div className="background-content-des">
                  {content.aboutMe}
                </div>
                <div className="background-button">
                  <div>
                    <a href="https://www.notion.so/Resume-052874c7312d4687ba4a1f7a0d8df0d9">Hire Me</a>
                  </div>
                </div> 
              </div>
            </Col>
          </Row>

          <Row type='flex' justify="end" align='middle'>
            <Col span={5} align="middle">
              <div className='next-button-container' onClick={()=>{introBackgroundAnimation()}}> 
                  <div className="icon-text">Next</div>
                  <ArrowDownOutlined className="icon"/>
              </div>
            </Col>
          </Row>
      
      </IntroBackground>
    </IntroWrapper>
    );

}



export default IntroductionSection;

