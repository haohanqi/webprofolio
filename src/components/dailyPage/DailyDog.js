import React,{useState,useEffect} from 'react'
import {Row,Col} from 'antd'
import {RightCircleOutlined} from '@ant-design/icons'
import {gsap,TweenMax} from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { DailyIntroContentWrapper,DailyImage } from './style'
import seven from '../../images/seven.svg'
import kobe from '../../images/kobe.svg'
import kyla from '../../images/kelly.svg'
import DadilyDogDetails from './DailyDogDetails'
import DailyDogDetailsOverlay from './DailyDogDetailsOverlay'




const DailyDog = ({ next }) => {

	const [openDetails,setOpenDetails] = useState(false)
	const [id, setId] = useState(null)
	const t1 = gsap.timeline()

	useEffect(()=>{
		gsap.registerPlugin(ScrollToPlugin)
		TweenMax.to(".daily-dog-container", 0, {
			visibility: "visible"
		})
	},[])

	useEffect(() => {
		if (openDetails) {
			t1.to(".dogDetails-overlay",0,{display:"flex"})
			  .to(".dogDetails-overlay-col",1, {height:0,stagger:0.2,})
			  .to(".dogDetails-overlay", 0, { display: "none" })
			  .from(".background-text",1,{y:-20,opacity:0,stagger:0.3,delay:-1})
		   }
	}, [openDetails])



	return (
		<div className="daily-dog-container" style={{visibility:'hidden'}}>
			<DailyDogDetailsOverlay/>
			<DadilyDogDetails open={openDetails} setOpen={setOpenDetails} id={id}/>
			
			<Row type='flex' justify='space-around' align="middle">
				<Col xl={12} lg={12} xs={24} sm={24}>
					<DailyIntroContentWrapper color="black" hoverColor="white" buttonHoverBackground="black">
						<div className="content-title">Lovely " Kids "</div>
						<p className="content-des">
							<b>They are not just pets,they are my family.</b><br/>
						       They are LOYALTY, they love us unconditionally, they are SKK
						</p>
						<div className="next-button" onClick={() => { next(2) }}>
							<div>Next</div>
						</div>
					</DailyIntroContentWrapper>
				</Col>


				<Col xl={12} xl={12} sm={20} xs={20}  style={{minHeight:"100vh", backgroundColor:"#fafafa"}}>
					<Row type="flex" justify="space-around" align="middle" style={{ marginBottom: "60px", marginTop: "60px"}}>
						<Col xl={12} xl={12} sm={24} xs={24} align="center">
							<DailyImage 
								width="80%"
								height="350px" 
								className="seven" 
								onClick={()=>{setOpenDetails(true); setId(1)}}
								// onMouseOver={() => { onMouseEnterAnimation("seven") }}
								// //onMouseLeave={() => { onMouseLeaveAnimation("seven") }}
								>
								<img src={seven}/>

								<div className="hover-text-container">

									<div className="hover-text-title">
										<span className="highlight">S</span>even.
									</div>

									<div className="hover-button">
										<div className="hover-icon-text">See More</div>
									</div>
								</div>

							</DailyImage>
						</Col>
						
						<Col xl={12} xl={12} sm={0} xs={0} align="center">
							<DailyImage 
								width="50%" 
								height="200px"
								className="kobe" 
								onClick={() => { setOpenDetails(true); setId(2) }}
								// onMouseEnter={() => { onMouseEnterAnimation("kobe") }}
								// onMouseLeave={() => { onMouseLeaveAnimation("kobe") }}
							>	
								<img src={kobe} />
								<div className="hover-text-container">
									<div className="hover-text-title" >
										<span className="highlight">K</span>obe.
									</div>
								</div>
							</DailyImage>
						</Col>
					</Row>

					<Row type="flex" justify="center">
						<Col xl={12} xl={12} sm={0} xs={0}>
							<DailyImage 
								width="100%" 
								height="200px"
								className="kyla"
								onClick={() => { setOpenDetails(true); setId(3) }}
								// onMouseEnter={() => { onMouseEnterAnimation("kyla") }}
								// onMouseLeave={() => { onMouseLeaveAnimation("kyla") }}
							>	
								<img src={kyla} />
								<div className="hover-text-container">
									<div className="hover-text-title" >
										<span className="highlight">K</span>yla.
									</div>
								</div>
							</DailyImage>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	)
}

export default DailyDog
