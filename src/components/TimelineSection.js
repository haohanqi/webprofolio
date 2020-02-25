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
                <TimelineDescription>Build up the team at 2020-01-10</TimelineDescription>
            </Timeline.Item>
            
            <Timeline.Item color="green" data-sal='fade' data-sal-delay="600" data-sal-duration="700">
                <TimelineDescription>First App design set up at 2020-01-15</TimelineDescription>
            </Timeline.Item>
            
            <Timeline.Item dot={<Icon type="clock-circle-o" />} data-sal='fade' data-sal-delay="700" data-sal-duration="700">
                <TimelineDescription> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.</TimelineDescription>
            </Timeline.Item>
            
            <Timeline.Item color="red" data-sal='fade' data-sal-delay="600" data-sal-duration="800">
                <TimelineDescription>Web and App lunched at 2020-2-24</TimelineDescription>
            </Timeline.Item>
            
            <Timeline.Item data-sal='fade' data-sal-delay="600" data-sal-duration="900">
                <TimelineDescription>Future App development meeting at 2020-03-05</TimelineDescription>
            </Timeline.Item>
            
            <Timeline.Item dot={<Icon type="clock-circle-o"  />} data-sal='fade' data-sal-delay="1000" data-sal-duration="700">
                <TimelineDescription>Technical testing at 2020-03-10</TimelineDescription>
            </Timeline.Item>
        </Timeline>
      </Col>
    </Row>
     
    </TimelineWapper>

    )
}

export default TimelineSection