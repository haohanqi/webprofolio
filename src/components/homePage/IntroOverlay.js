import React from 'react'
import { IntroOverlayWrapper } from './style'

const IntroOverlay = () => {
	return (
		<IntroOverlayWrapper className="intro-overlay-container">
			<h2 className="intro-overlay-text" style={{ position: 'absolute', top: "25%", width: '100%', textAlign: 'center',color:"white" }}>Web Developer</h2>
			<h2 className="intro-overlay-text" style={{ position: 'absolute', top: "50%", width: '100%', textAlign: 'center', color: "white" }}>UI / UX Designer</h2>
			<h2 className="intro-overlay-text" style={{ position: 'absolute', top: "75%", width: '100%', textAlign: 'center', color: "white" }}>Mobile App Developer</h2>
		</IntroOverlayWrapper>
	)
}

export default IntroOverlay