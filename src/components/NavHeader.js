import React, { useState, useEffect }  from 'react'
import {Row,Col} from 'antd'
import { NavHeaderWrapper, NavHumClose, NavHumOpen} from './basicStyle'
import NavMenu from './NavMenu'
import gsap from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'

const NavHeader = ({color,hiddenTitle}) => {

	const [open,setOpen] = useState(false)
	
	useEffect(()=>{
		const t1 = gsap.timeline()
		const t2 = gsap.timeline()
		gsap.registerPlugin(ScrollTrigger)

		var animationWidth = window.innerWidth
		var navMenuContainer
		var animationHeight

		if (animationWidth <=480){
			animationHeight='80vh'
			navMenuContainer='100vh'
		}else{
			animationHeight = '260px'
			navMenuContainer = '360px'
		}


		gsap.to(".nav-container", 1, {
			scrollTrigger: {
				trigger: ".nav-container",
				toggleActions: "play none none reverse",
				start: "top top-=50",
				scrub: 1,
			},
			ease: "power4.out",
			opacity: "0",
			display:"none",
		})

		
		if(open){
			//hum menu animation
			t2.to(".nav-container", { backgroundColor: "rgb(250,250,250,100)" })
			.to(".navHum-close .cbar",{width:"0px"})
			.to(".navHum-open",0, { display: "flex"})
			.to(".navHum-open .bar", {width:"3px",height:"33px"})
			.to(".navHum-close", { display:"none"})
		
			//open Nav animation
			t1.to(".NavMenuContainer",0.9,{
				display: "block",
				height: navMenuContainer,
				ease: "power4.in",
				delay:-0.6
			}).to(".menu",0.6,{
				display:'flex',
				height: animationHeight,
				opacity:"100",
				ease: "power4.out",
				delay:-0.2
			}).to(".socialMedia",0.4,{
				opacity:100,
				y:-5,
				ease: "power4.out",
			})
		}else{

			t2.to(".navHum-open .bar", { height: "0px"})
			.to(".nav-container", { backgroundColor: "rgb(250,250,250,0)" })
			.to(".navHum-open", { display: "none" })
			.to(".navHum-close", 0, { display: "flex"})
			.to(".navHum-close .cbar", { width: "33px",height:"3px" })
			
			
			t1.to(".menu", 0.3, {
				opacity: "0",
				ease: "power4.out",
			}).to(".socialMedia", 0.3,{
				opacity: 0,
				y: 0,
				ease: "power4.out",
				delay:-0.6,
			}).to(".menu", 0.3,{
				height:"0px",
				ease: "power4.out",
			}).to(".NavMenuContainer", 0.3,{
				height:"0px",
				ease: "power4.out",
				delay:-0.3
			}).to(".NavMenuContainer",{
				display:'none',
				delay:-0.7
			})
		}
	},[open])

	return (
		<NavHeaderWrapper className="nav-container">
			<Row type="flex" justify="space-around" align="middle">
				{
					hiddenTitle ? <Col xl={10} lg={10} md={10} sm={11} xs={11}></Col> : <Col xl={10} lg={10} md={10} sm={11} xs={11}>
						<span className="name" style={{ color: color }}>HHQ</span>
					</Col>
				}

				<Col span={10} align="right">
					{
						open ? <NavHumOpen className='navHum-open' onClick={()=>{ setOpen(!open) }}>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
						</NavHumOpen> 
						:
						<NavHumClose className='navHum-close' onClick={()=>{setOpen(!open)}}>
							<div className="cbar"></div>
							<div className="cbar"></div>
							<div className="cbar"></div>
						</NavHumClose>
					}
					
				</Col>
			</Row>

			<Row>
				<NavMenu/> 
			</Row>		
			
		</NavHeaderWrapper>
	)
}

export default NavHeader
