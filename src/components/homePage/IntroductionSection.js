import React,{useEffect} from 'react';
import { IntroWapper} from '../style'
import {Row,Col} from 'antd'
import {ArrowDownOutlined} from '@ant-design/icons'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { IntroBackground } from './style'
import croods from '../../images/croods.svg'


const IntroductionSection = ()=>{
      let titleShiftWidth
      let verticalShitftHeight

      useEffect(()=>{
        gsap.registerPlugin(ScrollToPlugin)
        gsap.registerPlugin(ScrollTrigger)

        if(window.innerWidth <=480 && window.innerWidth >=320){
            titleShiftWidth = '-50px'
            verticalShitftHeight=80
        }
        if (window.innerWidth >= 720){
          titleShiftWidth = '-100px'
          verticalShitftHeight = 120
        }
      })

      let t1 = gsap.timeline()
      let st1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-background",
          toggleActions: "play none none reverse",
          start: "top top",
        }
      })

      const introBackgroundAnimation = ()=>{
         t1.to(".intro-background", 1, {
            scale:0.8,
            zIndex: 20,
            position:'absolute',
            ease:'power4.out'
          })
            .set(document.body, { overflow: 'auto' })
            .to(window, 3, { scrollTo: '#worksection' })

          st1.to(".intro-background-title",{
            x:titleShiftWidth,
            duration: 1,
          }).to(".intro-background-content",{
            y: verticalShitftHeight,
            duration: 1,
          }).to(".intro-background-img",{
            y: verticalShitftHeight,
            duration: 1,
            delay:-1,
          }).to(".next-button-container",{
            y: 20,
            duration: 1,
            delay: -1,
          })
      }

      return (         
        <IntroWapper backgroundColor="white">
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
                    <div className="background-content-title">About Me</div>
                    <div className="background-content-des">
                      Hi! My name is Hanqi Hao, recently granduated from post-graduate program. I mainly focus on 
                      frontend development for website and mobile. And also I have one year work experiance with blockchain
                      technology. 
                    </div>
                    <div className="background-button">
                      <div>Hire Me</div>
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
         </IntroWapper>
        );
    
}

export default IntroductionSection;

