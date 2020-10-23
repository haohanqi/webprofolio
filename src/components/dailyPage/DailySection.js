import React from 'react'
import { DailySectionContainer } from './style'

const DailySection = ({ backgroundColor,children}) => {
	return (
		<DailySectionContainer backgroundColor={backgroundColor} className="panel">
			{children}
		</DailySectionContainer>
	)
}

export default DailySection
