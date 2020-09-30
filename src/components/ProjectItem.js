import React from 'react'
import { GithubOutlined} from '@ant-design/icons'
import {ProductItemWrapper} from './style'
import {Link} from 'gatsby'

const ProjectItem = ({title,des,link,backgroundColor})=>{
	return (
		<ProductItemWrapper backgroundColor={backgroundColor}>
			<h5 className="title">
				{title}
				<GithubOutlined className="icon" />
			</h5>
			<p className="des">{des}</p>
			<div><Link className="des" to={`./#${link}`}>see more</Link></div>
		</ProductItemWrapper>
	)
}

export default ProjectItem