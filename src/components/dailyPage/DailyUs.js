import React,{useState}from 'react'
import {Row, Col} from 'antd'
import gsap from 'gsap'
import DailyUsMenu from './DailyUsMenu'
import {DailyIntroContentWrapper} from './style'
import DailyUsDetails from './DailyUsDetails'
import dailyUsContent from '../../pageContent/dailyPageContent.json'

const DailyUs = () => {

	
	const [city, setCity] = useState('toronto')
	const [open, setOpen] = useState(false)
	
	const openAnimation = (cityName) => {
		setCity(cityName)
		setOpen(true)
	}

	const closeAnimation = ()=>{
		//When animation complete, unmount DailyUsDetails component
		const t2 = gsap.timeline({
			onComplete:()=>{setOpen(false)}
		})

		t2.to(".dailyUs-details-container .closeButton", 0.4, { y: 100, opacity: 0, display: "none" })
		.to(".dailyUs-details-container .title",0.4,{y:100,opacity:0,display:"none"})
		.to(".dailyUs-details-container .img", 0.4, { y: 100, opacity: 0, display: "none"})
		.to(".dailyUs-details-container .detailsDes", 0.4, { y: 100, opacity: 0, display: "none"})
		.to(".dailyUs-details-container",0.3,{padding:0,width:0})
	}

	return (
		<>

		<DailyUsDetails open={open} closeAnimation={closeAnimation} data={dailyUsContent.dailyUs.cityDes[`${city}`]}/>

		<Row type="flex" justify="flex-around">
			<Col xl={12} lg={12} md={12} sm={24} xs={24} style={{ minHeight: "100vh" }}>	
				<DailyIntroContentWrapper color="black">
					<div className="content-title">Daily Us</div>
					<p className="content-des">
						<b>Life is surrounded by love and beautiful scenery.</b> <br/>
					</p>
				</DailyIntroContentWrapper>
			</Col>
			
			<Col xl={12} lg={12} md={12} sm={24} xs={24} style={{backgroundColor:"#fafafa", minHeight: "100vh" }}>
					<DailyUsMenu openAnimation={openAnimation}/>
			</Col>
		</Row>

		</>
	)
}

export default DailyUs
