import React from 'react'
import {Row,Col,Divider} from 'antd'
import {Html5Outlined,createFromIconfontCN} from '@ant-design/icons'
import { SkillSectionWrapper, TitleWapper, Title, SkillItem} from '../style'
import graphql from '../../images/graphql-icon.svg'

const IconFont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_2078775_oujhj1wdfq.js'
})

const StillSection = ()=>{
	return (
		<SkillSectionWrapper backgroundColor="white">

			<Row type='flex' justify='start'>
				<Col xl={12} lg={12} md={12} sm={24} xs={24} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="800" >
					<TitleWapper>
						<Title color='black' textAlign='left'>Skills</Title>
					</TitleWapper>
				</Col>
			</Row>

			<Row type='flex' justify="start" 
				 data-sal='slide-up'
				 data-sal-delay="800"
				 data-sal-duration="800">
				<Col xl={12} lg={12} md={18} sm={24} xs={24}>
					<div className="skill-des">
						I use number of tools and library to make development much easier. I usually use 
						Adobe XD to do wireframing, mock up for website and mobile app. React and React Native is my favorite frontend framework which 
						I use daily. Ant Design is my favorite UI library, in my projects there are a lot of UI come from it. 
					</div>
				</Col>
			</Row>

			<div className="skill-subtitle">Basic Frontend Skill</div>

			<Row type='flex' justify="space-around" 
							 style={{ marginBottom: "30px" }} 
							 data-sal='slide-up' 
							 data-sal-delay="800" 
							 data-sal-duration="800">

				<Col xl={6} lg={4} md={6} sm={7} xs={7}>
					<SkillItem >
						<Html5Outlined className="icon"/>
						HTML 5
					</SkillItem>
				</Col>

				<Col xl={6} lg={4} md={6} sm={7} xs={7}>
					<SkillItem>
						<IconFont className="icon" type="iconCSS" />
						CSS 3
					</SkillItem>
				</Col>

				<Col xl={6} lg={4} md={6} sm={7} xs={7}>
					<SkillItem>
						<IconFont className="icon" type="iconjs" />
						Javascript
					</SkillItem>
				</Col>
			</Row>

			<div className="skill-subtitle">Useful Library</div>
			
			<Row type='flex' justify="space-around" 
							 style={{ marginBottom: "30px" }}
							 data-sal='slide-up'
							 data-sal-delay="800"
							 data-sal-duration="800"
							 >
				<Col xl={6} lg={4} md={6} sm={7} xs={7}>
					<SkillItem>
						<IconFont className="icon" type="iconReact"/>
						React
					</SkillItem>
				</Col>
				<Col xl={6} lg={4} md={6} sm={7} xs={7}>
					<SkillItem>
						<IconFont className="icon" type="iconnpm"/>
						Npm
					</SkillItem>
				</Col>

				<Col xl={6} lg={4} md={6} sm={7} xs={7}>
					<SkillItem>
						<img className="icon" src={graphql} />
						GraphQL
					</SkillItem>
				</Col>
			</Row>

			<div className="skill-subtitle">Basic Software</div>
			<Row type='flex' justify="space-around" 
							 style={{marginBottom:"40px"}}
							data-sal='slide-up'
							 data-sal-delay="800"
							 data-sal-duration="800"
							 >
				<Col xl={6} lg={4} md={6} sm={7} xs={7}>
					<SkillItem>
						<IconFont className="icon" type="iconADOBEXD" />
						Adobe XD
					</SkillItem>
				</Col>	
				<Col xl={6} lg={4} md={6} sm={7} xs={7}>
						
				</Col>	
				<Col xl={6} lg={4} md={6} sm={7} xs={7}>
						
				</Col>	
			</Row>
		</SkillSectionWrapper>
	)
}

export default StillSection