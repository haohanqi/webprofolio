import React from 'react'
import {Row,Col,Divider} from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { ProjectWrapper, ProjectItemWrapper } from './style'
import { TitleWapper, Title} from '../style'
import ProjectItem from './ProjectItem'
import person from '../../images/person.svg'

const ProductIntro = ()=>{
	
	return (
		<ProjectWrapper className="project-section">

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

			<Row type='flex' justify="space-around">
				<Col xl={12} lg={12} md={20} sm={24} xs={24}>
				
					<Row type='flex' justify="space-around" className="project-items-container">

						<Col xl={12} lg={12} md={20} sm={24} xs={24}>
								<ProjectItem title={"React Native Project"}
											 des={"Styled-Componment + Antd Design Mobile + Redux + React-Navigation"}
											 link="manga-list-project"
									         backgroundColor="#663399" />
						</Col>

						<Col xl={12} lg={12} md={20} sm={24} xs={24}>
							<ProjectItem title={"Gatsby"} 
										 des={"Netlify CMS + Gatsby + Styled-Component + Antd Design Web"} 
										 link="mineral-project"
										 backgroundColor="#663399"/>
						</Col>
				
						<Col xl={12} lg={12} md={20} sm={24} xs={24}>
							<ProjectItemWrapper backgroundColor="#FF0000">

							</ProjectItemWrapper>
						</Col>

						<Col xl={12} lg={12} md={20} sm={24} xs={24}>
							<ProjectItemWrapper >

							</ProjectItemWrapper>
						</Col>
					</Row>

				</Col>

				<Col span={12}>
					<img src={person} width="100%" height="50%" />
				</Col>
			</Row>

			<Divider/>
		</ProjectWrapper>
	)
}


export default ProductIntro