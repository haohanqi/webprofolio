import React from 'react'
import { Row, Col } from 'antd'
import {Link} from 'gatsby'
import JobItem from './JobItem'
import { JobSectionWrapper } from './style'
import {  TitleWapper, Title,BasicButton } from '../basicStyle'


const JobSection = ({content})=>{
	return (
		<JobSectionWrapper backgroundColor="#f9f9f9" id='worksection'>
			<Row type='flex' justify='start'>
				<Col  xl={12} lg={12} md={12} sm={24} xs={24} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="600" >
					<TitleWapper>
						<Title color='black' textAlign='left'>{content.workTitle}</Title>
					</TitleWapper>
				</Col>
			</Row>

			<Row type='flex' justify="start" 
				data-sal='slide-up'
				data-sal-delay="400"
				data-sal-duration="600">
				<Col xl={12} lg={12} md={18} sm={24} xs={24} >
					<div className='job-des'>
						{content.workDes}
					</div>
				</Col>
			</Row>

			<Row type='flex' justify='space-around'>
				{
					content ? content.workSkills.map((item, index)=>{
						return(
							<JobItem item={item}/>
						)
					}) : null

				}
			</Row>

			<Row type='flex' justify='center'>
				<Col span={24} align='center'>
					<BasicButton>
						<div>
							<Link to='/projectPage'>see more projects</Link>
						</div>
					</BasicButton>
				</Col>
			</Row>
		
		</JobSectionWrapper>
	)
}

export default JobSection


