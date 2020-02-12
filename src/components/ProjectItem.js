import React  from 'react';
import {ItemWapper,ItemContent,Cover,SocialLinks} from './style'
import {Icon,Button} from 'antd'


const ProjectItem =({title,description,imgSrc})=>{
   
        return (
            
            <ItemWapper>
                 <Cover >
                       <img className='clearfix' src='//images.ctfassets.net/ntiequ7mc6q6/6nf3rNaaVaUqYcoAcciSeC/31c775ba08e2edf3ad52438d17625b67/Mate_Logo.png?w=450&fl=progressive&q=100' />
                 </Cover>
                 <ItemContent>
                    <div className = 'title'> React Project </div>
                    <div className = 'description'>This is a React project. Using React-Nav, styled-Component.daahsh hhs hshshdha</div>
                 </ItemContent>

                 <SocialLinks>
                    <Icon type="codepen" />  
                    <Icon type="github" /> 
                    <Icon type="gitlab" />
                </SocialLinks>
                <Button type="primary" style={{float:'right', margin:'0 10% 0 0'}}>Detail</Button>

            </ItemWapper>
         
        );
  
}

export default ProjectItem;