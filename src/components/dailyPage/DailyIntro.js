import React,{useEffect} from 'react'
import {Row,Col} from 'antd'
import {gsap,TweenMax} from 'gsap'
import { DailyIntroContentWrapper, DailyImage } from './style'
import intro1 from '../../images/intro1.svg'
import intro2 from '../../images/intro2.svg'


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
		
		}).from(".img-1-container",1,{
			y: 1000,
			opacity: 0,
			ease: "power4.easeOut"
		}).from(".img-1",0.4,{
			scale:1.3,
			ease:"power3.easeOut",
		}).from(".img-2-container", 1, {
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
			<Col xl={14} lg={14} sm={24} xs={24}>
					<DailyIntroContentWrapper color="black" hoverColor="white" buttonHoverBackground="black">
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
			
			<Col xl={10} xl={10} sm={20} xs={20} align="middle">
				<Row type='flex' justify="start" style={{marginTop:'30px'}}>
					<Col xl={12} xl={12} sm={24} xs={24}> 
						<DailyImage className="img-1-container" width="70%" height="300px">
							<img className="img-1" src={intro1} />
						</DailyImage>
					</Col>
				</Row>

				<Row type='flex' justify="end">
					<Col xl={12} xl={12} sm={0} xs={0}> 
						<DailyImage className="img-2-container" width="70%" height="330px">
							<img className="img-2" src={intro2}/>
						</DailyImage>
					</Col>
				</Row>
			</Col>	
		</Row>
		</div>
	)
}

export default DailyIntro
