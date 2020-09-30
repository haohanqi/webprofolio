import React from 'react'
import { Row, Col, Divider } from 'antd'
import { CheckCircleFilled, DesktopOutlined, HighlightOutlined,MobileOutlined} from '@ant-design/icons'
import { SectionWapper, TitleWapper, Title, JobItem } from './style'


const JobSection = ()=>{
	return (
		<SectionWapper>
			<Row type='flex' justify='start'>
				<Col span={12} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="400" >
					<TitleWapper>
						<Title color='black' textAlign='left'>What I Do</Title>
						<span black></span>
					</TitleWapper>
				</Col>
			</Row>

			<Row type='flex' justify='space-around'>
				<Col xl={6} lg={6} md={22} sm={21} xs={21}>
					<JobItem>
						<div className="iconTitle"><DesktopOutlined/></div>
						<div className="title">Frontend Developer</div>
						<div className="des">
							<CheckCircleFilled className='icon'/>Having a soild skill with <b>HTML</b>, <b>CSS</b> and <b>JS</b>.
						 Comfortable with using <b>RESTful API</b>​ and <b>GraphQL</b></div>
						<div className="des"> <CheckCircleFilled className='icon' />Familiar with <b>Responsive Design</b>.</div>
						<div className="des"> <CheckCircleFilled className='icon' />Familiar with <b>React, Redux</b>​ (also middleware such as ​redux thunk​).</div>
						<div className="des"><CheckCircleFilled className='icon' />Understanding ​<b>BDD​,​TDD​ way</b> to test and develop code.</div>
					</JobItem>
				</Col>
				
				<Col xl={6} lg={6} md={22} sm={21} xs={21}>
					<JobItem>
						<div className="iconTitle"><HighlightOutlined /></div>
						<div className="title">UI / UX Design</div>
						<div className="des">
							<CheckCircleFilled className='icon' />Strong <b>Passion</b> and <b>Creativity</b>.
						</div>
						<div className="des"> <CheckCircleFilled className='icon' />Familiar with <b>Adobe XD</b> design tool.</div>
						<div className="des"> <CheckCircleFilled className='icon' />Familiar with <b>Desktop</b> and <b>Mobile</b> design</div>
						<div className="des"> <CheckCircleFilled className='icon' />Having a soild skill to achieve <b>Animation</b>​</div>
						<div className="des"><CheckCircleFilled className='icon' />Understanding ​<b>Client</b> requirements and Strong <b>Communiction Skills</b></div>
					</JobItem>
				</Col>
				<Col xl={6} lg={6} md={22} sm={21} xs={21}>
					<JobItem>
						<div className="iconTitle"><MobileOutlined /></div>
						<div className="title">Mobile App Developer</div>
						<div className="des">
							<CheckCircleFilled className='icon' />Familiar with <b>React Native</b> and <b>Swift UI</b>.</div>
						<div className="des"> <CheckCircleFilled className='icon' />Having a strong skill with <b>React-Navigation</b>​</div>
						<div className="des"> <CheckCircleFilled className='icon' />Able to develop <b>Cross Platform</b> App</div>
					</JobItem>
				</Col>
			</Row>
		
		</SectionWapper>
	)
}

export default JobSection