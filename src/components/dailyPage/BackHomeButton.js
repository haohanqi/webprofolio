import React from 'react'
import {Row,Col} from 'antd'
import {ArrowLeftOutlined} from '@ant-design/icons'
import { BackHomeButtonWrapper } from './style'


 const BackHomeButton = ({hidden}) => {
	return (
		 <Row type='flex' justify='start' style={hidden ? {display:'none'}:{}}>
			<Col span={4}>
				<BackHomeButtonWrapper>
					<div className="icon"><ArrowLeftOutlined /></div>
					<a className="text">Back</a>
				</BackHomeButtonWrapper>
			</Col>
		</Row>
	)
}

export default BackHomeButton


