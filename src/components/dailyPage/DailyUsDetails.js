import React,{useEffect} from 'react'
import gsap from 'gsap'
import {CloseOutlined} from '@ant-design/icons'
import { DailyUsDetailsWrapper} from './style'
import cover from '../../images/croods.svg'



const DailyUsDetails = ({open, closeAnimation,data}) => {

	const {title,des,img}=data

	useEffect(()=>{
		//when open is true, start entry animation
		const t1 = gsap.timeline()

		t1.from(".title", 0.6, { opacity: 0, y: -100 })
	      .from(".img", 0.6, { scale: 1.2, y: 100})
		  .from(".detailsDes", 0.6, { opacity: 0, y: -100 })
	},[open])

	const renderImg = ()=>{
		return <img className="img" alt="daily image" src={img ? require(`'../../../static${img}`) : cover}/>
	}

	const renderDtails = () => {
		return (
				<>	
					{
						open ? <DailyUsDetailsWrapper className="dailyUs-details-container">
									<div className="closeButton" onClick={() => {closeAnimation()}}>
										<CloseOutlined />
									</div>
										<div className="title">{title}</div>
										{renderImg()}
										<div className="detailsDes">
											{des}
										</div> 
								</DailyUsDetailsWrapper> : null
					}
				</>
		)
	 }

	return (
		<>
			{
				renderDtails()
			}
		</>
	)
}

export default DailyUsDetails
