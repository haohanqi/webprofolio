import React from 'react'
import { Row, Col } from 'antd'
import {ContactWrapper} from './style'
import constactImg from '../../images/contactImg.svg'

const ContactSection = () => {
	return (
		<ContactWrapper>
			<Row type="flex" align="middle" style={{height:"100%"}}>

				<Col xl={12} lg={12} md={24} sm={24} xs={24} style={{ backgroundColor: "white", height: "100%"}}>
					<div className="contact-img-container">
						<img src={constactImg} alt="contactImg" className="contact-img"/>
					</div>
				</Col>

				<Col xl={12} lg={12} md={24} sm={24} xs={24} style={{ backgroundColor: "#fafafa", height: "100%"}}> 
					<div className="contact-info-container">
						<div className="contact-title">Frontend / UI UX Design / Mobile App</div>
						<div className="contact-subtitle">Let's Work Together !</div>
						<form className="contact-form-container" form method="post" netlify name="contact">
								<input type="hidden" name="bot-field" />
								<input type="hidden" name="form-name" value="contact" />
								  
								<input type="text" className="formInput" placeholder="Your name" required/>
								<input type="email" className="formInput" placeholder="Your Email" required />
								<input type="text" className="formInput" placeholder="Company Name"/>
								<textarea type="text" className="messageInput" placeholder="Message"/>
								<input type="submit" className="submit-button" value="Send"/>
							</form>
						</div>
				</Col>	
			</Row>
		</ContactWrapper>
	)
}

export default ContactSection
