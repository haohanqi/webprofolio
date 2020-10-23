import React from 'react'
import { DailyUsMenueWrapper} from './style'

const DailyUsMenu = ({ openAnimation}) => {

	return (
		<DailyUsMenueWrapper>
			<div className="menuItemWrapper" onClick={() => {openAnimation('toronto')}}>
				<div className="menuItem">Toronto</div>
			</div>

			<div className="menuItemWrapper" onClick={() => { openAnimation('chicago') }}>
				<div className="menuItem">Chicago</div>
			</div>

			<div className="menuItemWrapper" onClick={() => { openAnimation('shanghai') }}>
				<div className="menuItem">ShangHai</div>
			</div>

			<div className="menuItemWrapper" onClick={() => { openAnimation('xian') }}>
				<div className="menuItem">Xi'an</div>
			</div>
			
		</DailyUsMenueWrapper>
	)
}

export default DailyUsMenu
