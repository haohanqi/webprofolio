import React from 'react'
import {Row,Col,Icon} from 'antd'
import {AboutUs,WorkLinks,ContactInfo,FooterTitle,FooterDescription} from './style'


const Footer=()=>{
    return(
       <div style={{backgroundColor:'black'}}>
        <Row type='flex' justify='space-around' align='top' >
            <Col md={8} xs={16}>
                <AboutUs>
                   <FooterTitle>About Us</FooterTitle>
                   <FooterDescription>We are ASH (Aniket, Sangini, Harry),
                   Students of Georgian College, Barrie
                   PG-Mobile Application Development (MDEV)</FooterDescription>
                </AboutUs>
            </Col>

            <Col md={8} xs={16}>
                <WorkLinks>
                     <FooterTitle>Links</FooterTitle>
                     <FooterDescription><a href='https://www.gatsbyjs.org/'>-> Gatsby Offical Website</a></FooterDescription>
                     <FooterDescription><a href='https://reactjs.org/'>-> React Offical Website</a></FooterDescription>
                     <FooterDescription><a href='https://facebook.github.io/react-native/'>-> React Native Offical Website</a></FooterDescription>

                </WorkLinks>
            </Col>

            <Col md={8} xs={16}>
                <ContactInfo>                   
                    <FooterTitle>Contact</FooterTitle>
                    <FooterDescription>Address: 107 avondale ave. North York. ON</FooterDescription>
                    
                    <FooterDescription>
                        Email: haohanqiharry@gmail.com <br/>
                    </FooterDescription>
                    
                    <FooterDescription>
                         Email: sangini1995@gmail.com <br/>
                    </FooterDescription>
                    
                    <FooterDescription>
                          Email: aniket23897@gmail.com <br/>
                    </FooterDescription>

                    <FooterDescription>Phone: 647-829-5577</FooterDescription>
                    <FooterDescription>
                        Socal Meida:
                        <Icon type="codepen" />
                        <Icon type="github" /> 
                        <Icon type="gitlab" />
                    </FooterDescription>
                </ContactInfo>
            </Col>
        </Row>

        <Row type='flex' justify='center'>
             <Col> 
                 <div style={{color:'white',fontWeight:'bold'}}>©2020 Created by ASH</div>
             </Col>
        </Row>
        </div>
    )
}

export default Footer