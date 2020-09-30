import React from 'react'
import {Row,Col,Divider} from 'antd'
import {Html5Outlined,createFromIconfontCN} from '@ant-design/icons'
import { SectionWapper, TitleWapper, Title, SkillItem} from './style'
import graphql from '../images/graphql-icon.svg'

const IconFont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_2078775_oujhj1wdfq.js'
})

const StillSection = ()=>{
	return (
		<SectionWapper color="white">

			<Row type='flex' justify='start'>
				<Col span={12} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="400" >
					<TitleWapper>
						<Title color='black' textAlign='left'>Skills</Title>
						<span black></span>
					</TitleWapper>
				</Col>
			</Row>

			<Row type='flex' justify="space-around" style={{marginBottom:"30px"}}>

				<Col xl={6} lg={4} md={6} sm={7} xs={7}>
					<SkillItem>
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


			<Row type='flex' justify="space-around">
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
			<Divider/>

			<Row type='flex' justify="space-around" style={{marginBottom:"40px"}}>
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
		</SectionWapper>
	)
}

export default StillSection