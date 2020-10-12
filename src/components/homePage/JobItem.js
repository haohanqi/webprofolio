import React from 'react'
import { JobItemWrapper } from '../style'
import {Col} from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'

const JobItem = ({item}) => {
	return (
	< Col xl = { 6} lg = { 6} md = { 22} sm = { 21} xs = { 21} >
		<JobItemWrapper data-sal='slide-up' data-sal-delay="400" data-sal-duration="600">
			<div className="title">{item.workSkillCate}</div>

			{
				item ? item.workSkill.map((skill,index)=>{
					return (
						<div className="des-container">
							<CheckCircleFilled className='icon' />
							<div className="des">
								{skill.workSkillDes}
							</div>
						</div>
					)
				}) : null
			}
		</JobItemWrapper>
	</Col >
	)
}

export default JobItem


	// < div className = "des-container" >
	// 	<CheckCircleFilled className='icon' />
	// 	<div className="des">
	// 		Having a soild skill with HTML, CSS and JS.
	// 		Comfortable with using RESTful API and GraphQL
	// 			</div>
	// 		</div >

	// <div className="des-container">
	// 	<CheckCircleFilled className='icon' />
	// 	<div className="des"> Familiar with Responsive Design.</div>
	// </div>

	// <div className="des-container">
	// 	<CheckCircleFilled className='icon' />
	// 	<div className="des">
	// 		Familiar with React, Redux​ (also middleware such as ​redux thunk​).
	// 						</div>
	// </div>

	// <div className="des-container">
	// 	<CheckCircleFilled className='icon' />
	// 	<div className="des">Understanding BDD​,​TDD​ way to test and develop code.</div>
	// </div>
