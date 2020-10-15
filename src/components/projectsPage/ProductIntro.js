import React from 'react'
import {Row,Col,Divider} from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { ProjectWrapper, ProjectItemWrapper } from './style'
import { TitleWapper, Title} from '../style'
import ProjectItem from './ProjectItem'
import projectCover from '../../images/projectCover.svg'
import data from '../../pageContent/projectPage.json'

const ProductIntro = ()=>{
	
	return (
		<ProjectWrapper className="project-section">
			<Row type='flex' align="middle" style={{height:"100%"}}>
				<div>
					<Row type='flex' justify='start' id="project-intro">
						<Col  xl={12} lg={12} md={12} sm={24} xs={24} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="600" >
							<TitleWapper>
								<Title color='black' textAlign='left'>Projects</Title>
							</TitleWapper>
						</Col>
					</Row>

					<Row type='flex' 
						justify="start"
						data-sal='slide-up'
						data-sal-delay="400"
						data-sal-duration="600">

						<Col xl={12} lg={12} md={18} sm={24} xs={24} >
							<div className='project-des'>
								Five different projects show different knowledges. For frontend projects, mainly using React and React Native. 
								For backend projects are based on Express and Koa2. For design, mainly using Adobe XD.
							</div>
						</Col>
					</Row>

					<Row type='flex' justify="space-around" >
						<Col xl={12} lg={12} md={20} sm={24} xs={24}>
						
							<Row type='flex' justify="space-around" className="project-items-container">
								{
									data.projectItems.map((item,index)=>{
										return (
											< Col xl={12} lg={12} md={20} sm={24} xs={24} 
												data-sal='slide-up'
												data-sal-delay="600"
												data-sal-duration="800">
												<ProjectItem title={item.projectTitle}
															des={item.projectDes}
															link={item.link}
															backgroundColor={item.backgroundColor} />
											</Col >
										)
									})
								}
							</Row>

						</Col>

						<Col span={12}>
							<img className="projectCover" src={projectCover} alt="projectCover" width="100%" height="50%" />
						</Col>
					</Row>
				</div>
			</Row>
		</ProjectWrapper>
	)
}


export default ProductIntro




