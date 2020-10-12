import React from 'react'

const IntroOverlay = () => {
	return (
		<div className="intro-overlay-container" style={{
			backgroundColor: "black",
			width: "100%",
			height: "100vh",
			zIndex: 90,
			overflow:'hidden',
			position: 'fixed',
			top: 0,
			left: 0,
		}}>
			<h2 className="intro-overlay-text" style={{ position: 'absolute', top: "25%", width: '100%', textAlign: 'center',color:"white" }}>Web Developer</h2>
			<h2 className="intro-overlay-text" style={{ position: 'absolute', top: "50%", width: '100%', textAlign: 'center', color: "white" }}>UI / UX Designer</h2>
			<h2 className="intro-overlay-text" style={{ position: 'absolute', top: "75%", width: '100%', textAlign: 'center', color: "white" }}>Mobile App Developer</h2>
		</div>
	)
}

export default IntroOverlay