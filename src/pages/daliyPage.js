import React,{useEffect,useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from '../components/layout'
import DailyPageOverlay from '../components/dailyPage/DailyPageOverlary'
import DailySection from '../components/dailyPage/DailySection'
import DailyIntro from '../components/dailyPage/DailyIntro'
import DailyDog from '../components/dailyPage/DailyDog'
import DailyUs from '../components/dailyPage/DailyUs'
import { DailyPageContainer} from '../components/dailyPage/style'

const DaliyPage = () => {

	// using ref to get container width, in order to click next button to scroll to next section.
	const container = useRef(null)

	let pageCount;

	useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger)
		let sections = gsap.utils.toArray(".panel")
		
		//get number of section for nextAnimation function
		pageCount = sections.length

		//horizontal scroll effect. when size is mobile, disable horizontal movement
		gsap.to(sections,{
			xPercent:-100*(sections.length-1),
			ease:"none",
			scrollTrigger:{
				trigger:".daily-container",
				pin:true,
				scrub:0.6,
				snap:1/(sections.length-1),
				horizontal: container.current.offsetWidth > 480 ? true : false,
			}
		})
	}, [])

	// go to next section function, pass to each section
	const nextAnimation = (page) => {
		gsap.to(window, 1.5, { scrollTo: { x: container.current.offsetWidth / (pageCount-page) } })
	}

	return (
		<>
			<DailyPageOverlay/>
			<Layout>
				<DailyPageContainer className="daily-container" ref={container}>
				
					<DailySection backgroundColor="white" hiddenBackButton={true}>
						<DailyIntro next={nextAnimation}/>
					</DailySection>

					<DailySection backgroundColor="white" >
						<DailyDog next={nextAnimation}/>
					</DailySection>

					<DailySection backgroundColor="white">
						<DailyUs next={nextAnimation}></DailyUs>
					</DailySection>
				</DailyPageContainer>		
			</Layout>
		</>
	)
}

export default DaliyPage
