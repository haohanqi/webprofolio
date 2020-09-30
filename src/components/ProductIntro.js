import React from 'react'
import {Row,Col,Divider} from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { SectionWapper, ProductItemWrapper} from './style'
import ProjectItem from './ProjectItem'
import person from '../images/person.svg'
const ProductInto = ()=>{
	
	return (
		<SectionWapper style={{marginTop:"90px",minHeight:"100vh",paddingLeft:"2%",paddingRight:"2%"}}>

			<Row type='flex' justify="space-around">
				<Col xl={12} lg={12} md={20} sm={24} xs={24}>
					<div style={styles.desWrapper}>
						<h3>Projects</h3>
						<p>5 different projects show different skills and knowledges. Mainly using React and React Native as frontend framework. 
						Also a lot UI componments comes from Antd Design UI library. For backend, mainly using Express and Koa2 </p>
					</div>
				
					<Row type='flex' justify="space-around">
						<Col xl={12} lg={12} md={20} sm={24} xs={24}>
							<ProductItemWrapper backgroundColor="rgb(97, 218, 251)">
								<h5 className="title">React Native Project <GithubOutlined className="icon"/></h5>
								<p className="des">Styled-Componment + Antd Design Mobile + Redux + React-Navigation</p>
								<div className="des">see more</div>
							</ProductItemWrapper>
						</Col>

						<Col xl={12} lg={12} md={20} sm={24} xs={24}>
							<ProjectItem title={"gatsby"} 
										 des={"Netlify CMS + Gatsby + Styled-Component + Antd Design Web"} 
										 backgroundColor="#663399"/>
						</Col>
					</Row>

					<Row type='flex' justify="space-around">
						<Col xl={12} lg={12} md={20} sm={24} xs={24}>
							<ProductItemWrapper backgroundColor="#FF0000">

							</ProductItemWrapper>
						</Col>

						<Col xl={12} lg={12} md={20} sm={24} xs={24}>
							<ProductItemWrapper >

							</ProductItemWrapper>
						</Col>
					</Row>
					<Row type='flex' justify="start">
						<Col xl={12} lg={12} md={20} sm={24} xs={24}>
							<ProductItemWrapper >

							</ProductItemWrapper>
						</Col>
					</Row>
				</Col>

				<Col span={12}>
					<img src={person} width="100%" height="90%" />
				</Col>
			</Row>

			<Divider/>
		
		
		</SectionWapper>
	)
}

const styles ={

	desWrapper:{
		marginLeft: "5%",
		marginBottom:"5%"
	}
}
export default ProductInto