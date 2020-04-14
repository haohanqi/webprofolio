import React from 'react'
import {Row,Col,Progress,Checkbox} from 'antd'
import {RatingWapper} from './style'
import CountUp from 'react-countup'
import ProcessCycle from '../components/ProcessCycle'


const checkbox =()=>{
    return(
      <RatingWapper>
         
         <Row type='flex' justify="center" data-sal='flip-up' data-sal-delay="650">
           <Col span={12}>
            <div><Checkbox autoFocus="true"/>     Virgin</div>
            <div><Checkbox checked="true"/>     Rogers</div>
            <div><Checkbox indeterminate="true"/>     Fido</div>
            <div><Checkbox />     Vodafone</div>
            <div><Checkbox/>     Idea</div>
           </Col>
           
           {/* <Col span={12}>
            <div className='percentage'><ProcessCycle  valueStart='0' valueEnd='87' duration='5' color='#ACFE98'/></div>
            <div>Google Store Rating</div>
           </Col> */}
         
         </Row>
    </RatingWapper>
       
    )
}

export default checkbox