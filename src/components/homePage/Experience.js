import React from 'react'
import { Row, Col, Divider, Tabs } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import { SectionWapper, TitleWapper, Title, ExperienceWrapper } from '../style'
import web from '../../images/web.svg'
import data from '../../images/data.svg'

const Experience = ()=>{
	return (
		<ExperienceWrapper>
			<Row type='flex' justify='start'>
				<Col xl={12} lg={12} md={12} sm={24} xs={24} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="400" >
					<TitleWapper>
						<Title color='black' textAlign='left'>Working Experience</Title>
					</TitleWapper>
				</Col>
			</Row>

			<Row type='flex' justify='space-around' style={styles.container}>
				<Col xl={12} lg={12} md={20} sm={22} xs={22}>
					<img src={web} width='100%'/>
				</Col>
				<Col xl={12} lg={12} md={20} sm={22} xs={22}>
					<div style={styles.title}>
						<h5>2018.12 - 2019.12 Moken Exchange</h5>
					</div>
					<Tabs>
						<Tabs.TabPane key='0' tab={<h6>Project</h6>}>
							<div style={styles.tabWrapper}>
								<h6>Project Description</h6>
								<div>Developing a web-based blockchain application. Helping to trade mineral commodity</div>
								<Divider/>
								<h6>Frontend:</h6>
								<div>React + Redux + Jest + Wix</div>
								<Divider />
								<h6>Backend:</h6>
								<div>​Hyperledger Composer + Koa + MongoDB</div>
								<Divider/>
								<h6>Github Link</h6>
								<div>​<a href='https://github.com/haohanqi/blockChain-democase-yunzhongCompany'>Hyperledger Composer Backend Demo</a></div>
							</div>
						</Tabs.TabPane>
						<Tabs.TabPane key='1' tab={<h6>Abilities</h6>}>
							<div style={styles.tabWrapper}>
								<h6><CheckCircleFilled style={styles.icon} />Build a frontend product page</h6>
								<Divider />
								<h6><CheckCircleFilled style={styles.icon}/>Design the Schema of product in mongoDB.</h6>
								<Divider/>
								<h6><CheckCircleFilled style={styles.icon} />Build ​RESTful api(Koa) includes get and post products’ info, get users’ info</h6>
								<Divider />
								<h6><CheckCircleFilled style={styles.icon} />Build a smart contract using ​Hyperledger Composer​.</h6>
								<Divider />
							</div>
						</Tabs.TabPane>
					</Tabs>
				</Col>
			</Row>

			<Divider/>

			<Row type='flex' justify='space-around' style={styles.container}>
				<Col xl={12} lg={12} md={20} sm={22} xs={22}>
					<img src={data} width='100%' />
				</Col>
				<Col xl={12} lg={12} md={20} sm={22} xs={22}>
					<div style={styles.title}>
						<h5>2018.6 - 2019.9 BigTreeTech,China</h5>
					</div>
					<Tabs>
						<Tabs.TabPane key='0' tab={<h6>Project</h6>}>
							<div style={styles.tabWrapper}>
								<h6>Project Description</h6>
								<div>Developing a website for government population census</div>
								<Divider />
								<h6>Frontend:</h6>
								<div>​React + Redux + Jest</div>
								<Divider />
							</div>
						</Tabs.TabPane>
						<Tabs.TabPane key='1' tab={<h6>Abilities</h6>}>
							<div style={styles.tabWrapper}>
								<h6><CheckCircleFilled style={styles.icon} /> Using​ React + Redux​ to develop a user info page.</h6>
								<Divider />
								<h6><CheckCircleFilled style={styles.icon} />Using​ ​styled-component, react-router</h6>
								<Divider />
								<h6><CheckCircleFilled style={styles.icon} />Build ​RESTful api(Koa) includes get and post products’ info, get users’ info</h6>
								<Divider />
								<h6><CheckCircleFilled style={styles.icon} />use ​Jest + Enzyme​ to provide unit test and integration test.</h6>
								<Divider />
							</div>
						</Tabs.TabPane>
					</Tabs>
				</Col>
			</Row>






		</ExperienceWrapper>
	)
}

const styles ={
	container:{
		marginTop:"20px"
	},
	title:{
		marginBottom:"20px",
		marginTop: "20px"
	},
	tabWrapper:{
		marginLeft:"10px",
		marginRight:"10px",
		width:"85%"
	},
	icon:{
		fontSize:"16px",
		verticalAlign:"center",
		marginRight:"10px",
		lineHeight:"16px"
	}
}

export default Experience

