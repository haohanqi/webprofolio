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
