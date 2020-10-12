import React,{useEffect} from 'react'
import {Row,Col} from 'antd'
import { FooterWrapper} from './style'
import avater1 from '../images/avater1.jpg'
import avater2 from '../images/avater2.jpg'
import dogs from '../images/dogs.jpg'


const Footer=()=>{

    return(
        <FooterWrapper backgroundColor="black" className="footer-container">
            <Row type="flex" justify="space-around"  style={{height:"100%",marginBottom:'30px'}}>
                <Col xl={7} lg={7} sm={22} xs={22}>
                        <div className="thanks" >Thanks For Watching !</div>
                </Col>

                <Col xl={10} lg={10} sm={22} xs={22} align="center">
                    <div className="footer-title">Follow Us</div>
                    <div className="follow-container">
                        <img className='follow-item' src={dogs}/>
                        <img className='follow-item' src={avater1} />
                        <img className='follow-item' src={avater2} />
                    </div>
                </Col>
                
                <Col xl={7} lg={7} sm={22} xs={22} align="center">
                    <div className="footer-title">Contact Me</div>
                    <div className="contact-container">
                        <div className='contact-item'>Phone: 647-829-5577</div>
                        <div className='contact-item'>Email: haohanqiharry@gmail.com</div>
                        <div className='contact-item'>Address: 107 avondale ave Toronto</div>
                    </div>
                </Col>
            </Row>

            <Row type="flex" justify="center">
                <Col lg={10} xl={10} sm={24} xs={24}>
                    <div style={{textAlign:"center"}}>@Create by HanQi Hao 2020</div>
                </Col>
            </Row>

        </FooterWrapper>
    )
}

export default Footer