import React from 'react'
import { DailySectionContainer } from './style'
import BackHomeButton from './BackHomeButton'

const DailySection = ({ backgroundColor,children,hiddenBackButton}) => {
	return (
		<DailySectionContainer backgroundColor={backgroundColor} className="panel">
			<BackHomeButton hidden={hiddenBackButton}/>
			{children}
		</DailySectionContainer>
	)
}

export default DailySection
