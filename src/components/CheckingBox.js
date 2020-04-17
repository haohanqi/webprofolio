import React from 'react'
import {Row,Col,Checkbox} from 'antd'
import {RatingWapper} from './style'



const CheckingBox =()=>{
    return(
      <RatingWapper>
         
         <Row type='flex' justify="center" data-sal='flip-up' data-sal-delay="650">
           <Col span={12}>
            <div><Checkbox autoFocus="true"/>Virgin</div>
            <div><Checkbox checked="true"/> Rogers</div>
            <div><Checkbox indeterminate="true"/>Fido</div>
            <div><Checkbox />Vodafone</div>
            <div><Checkbox/>Idea</div>
           </Col>
         
         </Row>
    </RatingWapper>
       
    )
}

export default CheckingBox