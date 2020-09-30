import React from 'react'
import {Timeline,Icon,Row,Col} from 'antd'
import {TimelineWapper,TitleWapper,Title,TimelineDescription} from './style'
const TimelineSection = ()=>{

    return(
    <TimelineWapper id='timeline'>
    <Row type='flex' justify='start'>
        <Col span={12} data-sal='zoom-in' data-sal-delay="400" data-sal-duration="400" > 
        <TitleWapper>
            <Title color='white' textAlign='left'>TimeLine</Title>
            <span style={{border:`1px solid white`}}></span>
        </TitleWapper> 
       </Col>
    </Row>

    <Row>
      <Col>
        <Timeline mode='alternate' style={{margin:'5% auto',width:'80%',color:'white',fontSize:'20px'}}>
            <Timeline.Item data-sal='fade' data-sal-delay="600" data-sal-duration="700">
                <TimelineDescription>2010-2013 ​As a professional volleyball athlete represented China to attend U15 U18 U20 </TimelineDescription>
            </Timeline.Item>
            
            <Timeline.Item color="green" data-sal='fade' data-sal-delay="600" data-sal-duration="700">
                 <TimelineDescription>2014-2018 study Computer Science in York University  </TimelineDescription>
            </Timeline.Item>

            <Timeline.Item color="green" data-sal='fade' data-sal-delay="600" data-sal-duration="700">
                <TimelineDescription>2018.6-2018.9 intership in BigTree Tech (China) as a frontend developer </TimelineDescription>
            </Timeline.Item>
            
            <Timeline.Item dot={<Icon type="clock-circle-o" />} data-sal='fade' data-sal-delay="700" data-sal-duration="700">
                <TimelineDescription> 2018.12 - 2019.12 Working in a blockchain tech start-up comapany as a frontend developer and blockchain developer.</TimelineDescription>
            </Timeline.Item>
            
            <Timeline.Item color="red" data-sal='fade' data-sal-delay="600" data-sal-duration="800">
                <TimelineDescription>2019.12 - 2020.8 study post-graduate Mobile App Development in Georgian College </TimelineDescription>
            </Timeline.Item>
        </Timeline>
      </Col>
    </Row>
     
    </TimelineWapper>

    )
}

export default TimelineSection