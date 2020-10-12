import React from 'react'
import { DailyDogDetailsOverlayWrapper } from './style'

const DailyDogDetailsOverlay = () => {
	return (
		<DailyDogDetailsOverlayWrapper className="dogDetails-overlay">
			<div className="dogDetails-overlay-col">
				<div className="dogDetails-overlay-text">S</div>
			</div>
			<div className="dogDetails-overlay-col">
				<div className="dogDetails-overlay-text">K</div>
			</div>
			<div className="dogDetails-overlay-col">
				<div className="dogDetails-overlay-text">K</div>
			</div>		
		</DailyDogDetailsOverlayWrapper>
		
	)
}

export default DailyDogDetailsOverlay
