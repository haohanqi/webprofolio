import React from 'react'
import { Row, Col } from 'antd'
import { CheckCircleFilled, DesktopOutlined, HighlightOutlined,MobileOutlined} from '@ant-design/icons'
import JobItem from './JobItem'
import { JobSectionWrapper, TitleWapper, Title,BasicButton } from '../style'


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
						<div>see more projects</div>
					</BasicButton>
				</Col>
			</Row>
		
		</JobSectionWrapper>
	)
}

export default JobSection


