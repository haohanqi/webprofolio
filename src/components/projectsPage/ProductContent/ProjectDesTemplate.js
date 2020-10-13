import React from 'react'
import {Divider} from 'antd'

const ProjectDesTemplate = ({data}) => {
	return (
		<div>
			<h6>Main Idea</h6>
			<div>{data.porjectDes.mainIdea}</div>
			<Divider/>

			<h6>Development</h6>
			{
				data.porjectDes.development.map((item,index)=>{
					return (
						<div>{index+1}. {item}</div>
					)
				})
			}
			<Divider/>
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
