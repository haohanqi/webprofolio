import React,{useEffect} from 'react'
import {DailyPageOverlaryWrapper} from './style'
import {gsap,TweenMax} from 'gsap'

const DailyPageOverlary = () => {
	useEffect(()=>{

		TweenMax.to(".dailyPage-overlay-container", 0, {
			visibility: "visible"
		})

		let t1 = gsap.timeline()
		t1.from(".process", 1, { width: 0 })
			.from(".overlay-text", 0.3, { display: 'none' })
			.to(".process",0,{display:'none'})
			.to(".top-overlay", 0.6, { y: "-100%" })
			.to(".bottom-overlay", 0.9, { y: "100%",delay:-0.6})
			.to(".overlay-text",0,{display:'none'})
			.to(".dailyPage-overlay-container",0, { display: 'none' })
	})

	return (
		<DailyPageOverlaryWrapper className='dailyPage-overlay-container'>
			<div className="top-overlay"></div>
			<div className="overlay-text-container">
				<div className="process"></div>
				<div className="overlay-text">Daily Life</div>
				<div className="process"></div>
			</div>
			<div className="bottom-overlay"></div>
		</DailyPageOverlaryWrapper>
	)
}

export default DailyPageOverlary
