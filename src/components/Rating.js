import React from 'react'
import {Row,Col} from 'antd'
import {RatingWapper} from './style'
import CountUp from 'react-countup'
import ProcessCycle from '../components/ProcessCycle'


const Rating =()=>{
    return(
      <RatingWapper>
         
         <Row type='flex' justify="center" data-sal='flip-up' data-sal-delay="650">
           <Col span={12}>
            <div className='percentage'><ProcessCycle  valueStart='0' valueEnd='82' duration='5' /></div>
            <div>App Store Rating</div>
           </Col>
           
           <Col span={12}>
            <div className='percentage'><ProcessCycle  valueStart='0' valueEnd='87' duration='5' color='#ACFE98'/></div>
            <div>Google Store Rating</div>
           </Col>
         
         </Row>

         
         <Row type='flex' justify="center" data-sal='flip-up' data-sal-delay="650">
            <Col span={12}>
                          <CountUp  
                                    className='counting'
                                    start={0}
                                    end={350}
                                    duration={3.5}
                                    delay={2.5}
                                    suffix=" +"
                                    />
                            <div style={{marginTop:'3%', fontWeight:'bold'}}>Download Times</div>
            </Col>
            
            <Col span={12}>
                        <CountUp  
                                     className='counting'
                                     start={0}
                                     end={1000}
                                     duration={3.5}
                                     delay={2.5}
                                     suffix=" +"
                                    />  
                        <div style={{marginTop:'3%', fontWeight:'bold'}}>GitHub Stars</div>
            </Col>
          
         </Row>

        
    </RatingWapper>
       
    )
}

export default Rating