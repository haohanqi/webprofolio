import React,{useEffect} from 'react'
import {Row,Col} from 'antd'
import {gsap,TweenMax} from 'gsap'
import { DailyIntroContentWrapper, DailyImage } from './style'
import person from '../../images/self.svg'

const DailyIntro = () => {
	
	useEffect(()=>{
		let t1 = gsap.timeline()
		TweenMax.to(".daily-intro-container",0,{
			visibility:"visible"
		})

		t1.to(".content-title",0.3,{
			y:-10,
			opacity:100,
			ease:"power4.in",
			delay:1.5
		}).to(".content-des",0.3,{
			y:-20,
			opacity:100,
			ease:"power4.in",
		
		}).to(".next-button", 0.3,{
			y: -20,
			opacity: 100,
			ease: "power4.in",
		
		}).from(".img-1-container",0.4,{
			y: 1000,
			opacity: 0,
			ease: "power4.easeOut"
		}).from(".img-1",0.4,{
			scale:1.3,
			ease:"power3.easeOut",
		}).from(".img-2-container", 0.4, {
			y:1000,
			opacity: 0,
			ease: "power4.easeOut",
		}).from(".img-2", 0.4, {
			scale: 1.3,
			ease: "power3.easeOut",
		})
	})
	return (
		<div className="daily-intro-container" style={{visibility:"hidden"}}>
		<Row type='flex' justify='space-around' align="middle">
			<Col span={14}>
				<DailyIntroContentWrapper>
					<div className="content-title">Daily Life</div>
					<p className="content-des">
						<b>Life is surrounded by love and beautiful scenery.</b> <br/>
						" There is no fear in love, but perfect love casts out fear.
						 For fear has to do with punishment, and whoever fears has not been perfected in love. 
						 -1 John 4 : 1"
					</p>
					<div className="next-button">
						<div>Next</div>
					</div>
				</DailyIntroContentWrapper>
			</Col>
			
			<Col span={10} align="middle">
				<Row type='flex' justify="start">
					<Col span={12}> 
						<DailyImage className="img-1-container" width="90%" height="350px">
							<img className="img-1" src={person} />
						</DailyImage>
					</Col>
				</Row>

				<Row type='flex' justify="end">
					<Col span={12}> 
						<DailyImage className="img-2-container" width="90%" height="350px">
							<img className="img-2" src={person}/>
						</DailyImage>
					</Col>
				</Row>
			</Col>	
		</Row>
		</div>
	)
}

export default DailyIntro
