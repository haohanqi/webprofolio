import React from 'react'
import AnimatedProgressProvider from './AnimatedProgressProvider'

import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";

import 'react-circular-progressbar/dist/styles.css';

import { easeQuadInOut } from "d3-ease";


const ProcessCycle = ({valueStart,valueEnd,duration,color})=>{
//console.log(valueStart)
return(    
<AnimatedProgressProvider
        valueStart={valueStart}
        valueEnd={valueEnd}
        duration={duration}
        easingFunction={easeQuadInOut}
      >

      {
       
        value => {   
          const roundValue = Math.round(value)
            return (
             <CircularProgressbar
                value={value}
                text={`${roundValue}%`}
                styles={buildStyles({ pathTransition: "none", pathColor:color ,
              })}
              />
          )
        }
        
    
    }
      
      </AnimatedProgressProvider>
)
}

export default ProcessCycle