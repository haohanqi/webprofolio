import React from 'react'
import {Divider} from 'antd'

const ProjectDesTemplate = ({data}) => {

	const renderDevelopment = (items)=>{
		return (
			<>
				<h6>Development</h6>
				{
					items.map((item, index) => {
						return (
							<div>{index + 1}. {item}</div>
						)
					})
				}
				<Divider/>
			</>
		)
	}

	return (
		<div>
			<h6>Main Idea</h6>
			<div>{data.porjectDes.mainIdea}</div>
			<Divider/>

			{
				data.porjectDes.development ? renderDevelopment(data.porjectDes.development):null
			}
			
			{
				data.porjectDes.link.map((item)=>{
					return (
						<span style={{marginRight:"20px"}}>
							<a href={item.address} target="_blank">{item.name}</a>
						</span>
					)
				})
			}
		</div>
	)
}

export default ProjectDesTemplate
