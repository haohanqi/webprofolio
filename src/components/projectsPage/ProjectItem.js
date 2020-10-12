import React,{useEffect} from 'react'
import { ProjectItemWrapper} from './style'
import {gsap} from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const ProjectItem = ({title,des,link,backgroundColor})=>{
	useEffect(()=>{
		gsap.registerPlugin(ScrollToPlugin)
	})

	const scrollAnimation = ()=>{
		gsap.to(window, 1, { scrollTo: `#${link}` })
	}

	return (
		<ProjectItemWrapper backgroundColor={backgroundColor}>
			<h5 className="title">
				{title}	
			</h5>
			<p className="des">{des}</p>
			<div className="seeMore">
				<div className="des" onClick={()=>{scrollAnimation()}}>see more</div>
			</div>
		</ProjectItemWrapper>
	)
}

export default ProjectItem