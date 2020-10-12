import React from 'react'
import { DailySectionContainer } from './style'

const DailySection = ({ backgroundColor,children,hiddenBackButton}) => {
	return (
		<DailySectionContainer backgroundColor={backgroundColor} className="panel">
			{children}
		</DailySectionContainer>
	)
}

export default DailySection
