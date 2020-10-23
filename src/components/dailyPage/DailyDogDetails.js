import React,{useEffect}from 'react'
import {CloseCircleOutlined } from '@ant-design/icons'
import { DailyDogDetailsWrapper, DailyDogDetailsBackground } from './style'
import { gsap,TweenMax } from 'gsap'
import {Row,Col} from 'antd'


const DailyDogDetails = ({open,id,setOpen}) => {

	const data=[
		{
			name: "seven",
			des: "Hello, I am seven. ummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, remaining essentiall",
			backgoroundText: ["Seven", "Loves", "Apple"]
		},

		{
			name: "kobe",
			des: "Hello, I am kobe. ummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, remaining essentiall",
			backgoroundText: ["Kobe", "Loves", "Ball"]
		},

		{
			name: "kyla",
			des: "Hello, I am kelly. ummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, remaining essentiall",
			backgoroundText: ["Kelly", "Loves", "Huhu"]
		}
	]
	
	let t1 = gsap.timeline()

	 useEffect(() => {
		 TweenMax.to(".dailydog-datails-container", 0, {
			 visibility: "visible"
		 })
		 gsap.from(".coverImg", 1, { height: 0})
	 })

	const close = () => {
		t1.to(".background-text", 0.3, { opacity: 0, stagger: 0.2 })
		  .to(
				".dogDetails-overlay",0,{display:"flex"})
		  .to(
			  ".dogDetails-overlay-col", 1, { height: "100vh", stagger:0.2, delay:-0.3 })
		  .to(
			  	".dogDetails-overlay", 0,{display:'none'})
		  .to(
			 	".dailyDog-container", 0, 
				{  
				  display:'none',
				  onComplete: () => { setOpen(false) } 
				}
		  )
	}

	const render = ()=>{
		return (
			<div className="dailydog-datails-container" style={{visibility:"hidden"}}>

			<DailyDogDetailsWrapper className="dailyDog-container">

				<DailyDogDetailsBackground>
					<Row type="flex" justify="start" className="row">
						<Col xl={8} lg={8} sm={20} xs={20} align="middle">
							<div className="background-text">{data[id-1].backgoroundText[0]}</div>
						</Col>
					</Row>

					<Row type="flex" justify="end" align="middle" className="row">
						<Col xl={8} lg={8} sm={20} xs={20}>
								<div className="background-text">{data[id-1].backgoroundText[1]}</div>
						</Col>
					</Row>

					<Row type="flex" justify="end" align="middle" className="row">
						<Col xl={8} lg={8} sm={20} xs={20}>
								<div className="background-text">{data[id-1].backgoroundText[2]}</div>
						</Col>
					</Row>

				</DailyDogDetailsBackground>

				<div className="closeButton-container" onClick={close}>
					<CloseCircleOutlined className="closeButton"/>
				</div>

				<div className="details-container">
					<div className="coverImg">

					</div>

					<div className="detail-content-container">
							<div className="title">{data[id-1].name}</div>
							<div className="detail-content">{data[id-1].des}</div>
					</div>

					<div className="follow">
						<div className="text">Follow me</div>
						<div className="icon">icon</div>
					</div>
				</div>
			
			</DailyDogDetailsWrapper>
			
			</div>
		)
	}

	return (
		<>
			{
				open && id ? render():null
			}
		</>
	)
		
}

export default DailyDogDetails
