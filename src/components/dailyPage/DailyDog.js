import React,{useState,useEffect} from 'react'
import {Row,Col} from 'antd'
import {gsap} from 'gsap'
import { DailyIntroContentWrapper,DailyImage } from './style'
import test from '../../images/data.svg'
import DadilyDogDetails from './DailyDogDetails'




const DailyDog = () => {

	const [openDetails,setOpenDetails] = useState(false)
	const [id, setId] = useState(null)

	useEffect(() => {
		let t1 = gsap.timeline()

		if (openDetails) {
			t1.to('.coverImg', 0.6, {
				width: 0
			})
		}
	}, [openDetails])


	return (
		<>
			<DadilyDogDetails open={openDetails} setOpen={setOpenDetails} id={id}/>
			<Row type='flex' justify='space-around' align="middle">
				<Col span={12}>
					<DailyIntroContentWrapper>
						<div className="content-title">Lovely " Kids "</div>
						<p className="content-des">
							<b>They are not just pets,they are my family</b><br />
							They are LOYALTY, they are happy, they love us unconditionally.
						</p>
						<div className="next-button">
							<div>Next</div>
						</div>
					</DailyIntroContentWrapper>
				</Col>


				<Col span={12}>
					<Row type="flex" justify="space-around" align="middle" style={{marginBottom:"30px"}}>
						<Col span={12}>
							<DailyImage width="80%" height="350px" onClick={()=>{
								setOpenDetails(true)
								setId(1)
							}}>
								<img src={test}/>
								<div>Seven</div>
							</DailyImage>
						</Col>
						
						<Col span={12}>
							<DailyImage width="50%" height="200px" onClick={() => {
								setOpenDetails(true)
								setId(2)
							}}>	
								<img src={test} />
							</DailyImage>
						</Col>
					</Row>

					<Row type="flex" justify="center">
						<Col span={12}>
							<DailyImage width="100%" height="200px">	
								<img src={test} />
							</DailyImage>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	)
}

export default DailyDog
