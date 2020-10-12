import React from 'react'
import { Row, Col } from 'antd'
import { CheckCircleFilled, DesktopOutlined, HighlightOutlined,MobileOutlined} from '@ant-design/icons'
import { JobSectionWrapper, TitleWapper, Title, JobItem,BasicButton } from '../style'


const JobSection = ()=>{
	return (
		<JobSectionWrapper backgroundColor="#f9f9f9" >
			<Row type='flex' justify='start'>
				<Col id='worksection' xl={12} lg={12} md={12} sm={24} xs={24} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="600" >
					<TitleWapper>
						<Title color='black' textAlign='left'>What I Do</Title>
					</TitleWapper>
				</Col>
			</Row>

			<Row type='flex' justify="start" 
				data-sal='slide-up'
				data-sal-delay="400"
				data-sal-duration="600">
				<Col xl={12} lg={12} md={18} sm={24} xs={24} >
					<div className='job-des'>
						I have a strong passion for design and new technology. I mainly focus on Frontend Development for website and mobile App. 
						But I also have a good knowledge with Backend, understanding REST api, JWT.   
					</div>
				</Col>
			</Row>

			<Row type='flex' justify='space-around'>
				<Col xl={6} lg={6} md={22} sm={21} xs={21}>
					<JobItem data-sal='slide-up' data-sal-delay="400" data-sal-duration="600">
						<div className="iconTitle"><DesktopOutlined/></div>
						<div className="title">Frontend Developer</div>
						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des">
								Having a soild skill with HTML, CSS and JS.
								Comfortable with using RESTful API and GraphQL
							</div>
						</div>
						
						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des"> Familiar with Responsive Design.</div>
						</div>
						
						<div className="des-container">
							<CheckCircleFilled className='icon' />	
							<div className="des"> 
								Familiar with React, Redux​ (also middleware such as ​redux thunk​).
							</div>
						</div>

						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des">Understanding BDD​,​TDD​ way to test and develop code.</div>
						</div>
						
					</JobItem>
				</Col>
				
				<Col xl={6} lg={6} md={22} sm={21} xs={21}>
					<JobItem data-sal='slide-up' data-sal-delay="400" data-sal-duration="600">
						<div className="iconTitle"><HighlightOutlined /></div>
						<div className="title">UI / UX Design</div>
						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des">
								Strong Passion and Creativity.
							</div>
						</div>

						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des">Familiar with Adobe XD design tool.</div>
						</div>

						<div className="des-container">	
							<CheckCircleFilled className='icon' />		
							<div className="des"> Familiar with Desktop and Mobile design</div>
						</div>

						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des"> Having a soild skill to achieve Animation</div>
						</div>


						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des">
								Understanding ​Client requirements and Strong Communiction Skills
							</div>
						</div>

					</JobItem>
				</Col>

				<Col xl={6} lg={6} md={22} sm={21} xs={21}>
					<JobItem data-sal='slide-up' data-sal-delay="400" data-sal-duration="600">
						<div className="iconTitle"><MobileOutlined /></div>
						<div className="title">Mobile App Developer</div>
						
						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des">
								Familiar with React Native and Swift UI.
							</div>
						</div>

						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des">Having a strong skill with React-Navigation​</div>
						</div>

						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des">Able to develop Cross Platform App</div>
						</div>
					</JobItem>
				</Col>

			</Row>

			<Row type='flex' justify='center'>
				<Col span={24} align='center'>
					<BasicButton>
						<div>see more projects</div>
					</BasicButton>
				</Col>
			</Row>
		
		</JobSectionWrapper>
	)
}

export default JobSection