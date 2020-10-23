import React from 'react'
import { Row, Col } from 'antd'
import {ContactWrapper} from './style'
import constactImg from '../../images/contactImg.svg'

const ContactSection = () => {
	return (
		<ContactWrapper>
			<Row type="flex" align="middle" style={{height:"100%"}}>

				<Col xl={12} lg={12} md={24} sm={24} xs={24} style={{ backgroundColor: "white", height: "100%"}}>
					<div className="contact-img-container" data-sal='zoom-in' data-sal-delay="400" data-sal-duration="600">
						<img src={constactImg} alt="contactImg" className="contact-img"/>
					</div>
				</Col>

				<Col xl={12} lg={12} md={24} sm={24} xs={24} style={{ backgroundColor: "#fafafa", height: "100%"}}> 
					<div className="contact-info-container" data-sal='zoom-in' data-sal-delay="400" data-sal-duration="600">
						<div className="contact-title">Frontend / UI UX Design / Mobile App</div>
						<div className="contact-subtitle">Let's Work Together !</div>
						<form className="contact-form-container" method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
								<input type="hidden" name="bot-field" />
								<input type="hidden" name="form-name" value="contact" />
								<input type="text" className="formInput" placeholder="Your name" name="clients name"required/>
								<input type="email" className="formInput" placeholder="Your Email" name="clients email" required />
								<input type="text" className="formInput" name="company name" placeholder="Company Name"/>
								<textarea type="text" className="messageInput" name="message" placeholder="Message"/>
								<input type="submit" className="submit-button" value="Send"/>
							</form>
						</div>
				</Col>	
			</Row>
		</ContactWrapper>
	)
}

export default ContactSection
