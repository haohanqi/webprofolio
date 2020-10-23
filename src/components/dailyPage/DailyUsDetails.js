import React,{useEffect} from 'react'
import gsap from 'gsap'
import {CloseOutlined} from '@ant-design/icons'
import { DailyUsDetailsWrapper} from './style'
import toronto from '../../images/self.svg'


const DailyUsDetails = ({open, closeAnimation,data}) => {

	const {title,des,imgName}=data

	useEffect(()=>{
		//when open is true, start entry animation
		const t1 = gsap.timeline()

		t1.from(".title", 0.6, { opacity: 0, y: -100 })
			.from(".img", 0.6, { scale: 1.2, y: 100})
			.from(".des", 0.6, { opacity: 0, y: -100 })
	},[open])

	const renderImg = ()=>{
		if(imgName == 'toronto'){
			return <img className="img" src={toronto}/>
		}
	}

	return (
		<>
			{
				open ? <DailyUsDetailsWrapper className="dailyUs-details-container">
					<div className="closeButton" onClick={() => {closeAnimation()}}>
						<CloseOutlined />
					</div>
						<div className="title">{title}</div>
						{renderImg()}
						<div className="des">
							{des}
						</div> 
				</DailyUsDetailsWrapper> : null
			}
		</>
	)
}

export default DailyUsDetails
