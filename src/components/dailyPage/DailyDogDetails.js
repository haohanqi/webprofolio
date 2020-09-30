import React,{useEffect}from 'react'
import { DailyDogDetailsWrapper } from './style'
import { gsap } from 'gsap'

const DailyDogDetails = ({open,id,setOpen}) => {
	console.log(open)
	let t1 = gsap.timeline()

	useEffect(() => {
	
	})

	const render = ()=>{
		return (
			<DailyDogDetailsWrapper className="dailyDog-container">
				<div className="closeButton" onClick={() => { 
					t1.to("details-container", 1, { opacity: 0})
						.to(".dailyDog-container", 1, { opacity: 0, onComplete: () => { setOpen(false)} })
				}}>
				 x
				</div>
				<div className="details-container">
					<div className="coverImg">

					</div>

					<div className="detail-content-container">
						<div className="title">Seven</div>
						<div className="detail-content">Hello, I am seven. ummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, remaining essentiall</div>
					</div>

					<div className="follow">
						<div className="text">Follow me</div>
						<div className="icon">icon</div>
					</div>
				</div>
			
			</DailyDogDetailsWrapper>
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
