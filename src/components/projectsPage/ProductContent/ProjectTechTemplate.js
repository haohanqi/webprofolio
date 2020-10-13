import React from 'react'
import {Divider} from 'antd'
const ProjectTechTemplate = ({data}) => {
	return (
		<div>
			<h6>Framework</h6>
			{
				data.techStack.framework.map((item)=>{
					return (
						<span style={styles.itemStyle}>{item} </span>
					)
				})
			}
			<Divider />

			<h6>Library</h6>
			{
				data.techStack.library.map((item) => {
					return (
						<span style={styles.itemStyle}>{item} </span>
					)
				})
			}
		</div>
	)
}

const styles ={
	itemStyle:{
		marginRight:"5px"
	}
}

export default ProjectTechTemplate
