import React,{useEffect} from 'react'
import Layout from '../components/layout'
import DailyPageOverlay from '../components/dailyPage/DailyPageOverlary'
import DailySection from '../components/dailyPage/DailySection'
import DailyIntro from '../components/dailyPage/DailyIntro'
import DailyDog from '../components/dailyPage/DailyDog'
import {gsap} from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import { DailyPageContainer} from '../components/dailyPage/style'

const DaliyPage = () => {

	useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger)
		let sections = gsap.utils.toArray(".panel")

		gsap.to(sections,{
			xPercent:-100*(sections.length-1),
			ease:"none",
			scrollTrigger:{
				trigger:".daily-container",
				pin:true,
				scrub:3,
				snap:1/(sections.length-1)
			}
		})
	})

	return (
		<>
		<DailyPageOverlay/>
		<Layout>
			<DailyPageContainer className="daily-container">
			
				<DailySection backgroundColor="white" hiddenBackButton={true}>
					<DailyIntro/>
				</DailySection>

				<DailySection backgroundColor="white" >
					<DailyDog/>
				</DailySection>

				<DailySection backgroundColor="black"/>
			</DailyPageContainer>		
		</Layout>
		</>
	)
}

export default DaliyPage
