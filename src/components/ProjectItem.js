import React  from 'react';
import {ItemWapper,ItemContent,Cover,SocialLinks} from './style'
import {Icon,Button} from 'antd'
import {Link} from 'gatsby'


const ProjectItem =({title,description,imgSrc,githubLink})=>{
   
        return (
            
            <ItemWapper>
                 <Cover >
                       <img className='clearfix' src={imgSrc} />
                 </Cover>
                 <ItemContent>
                    <div className = 'title'> {title} </div>
                    <div className = 'description'>{description}</div>
                 </ItemContent>

                 <SocialLinks>
                    <Icon type="codepen" />
                    <a href='https://github.com/haohanqi/Apiassignment' target="_blank"><Icon type="github" /></a>
                    <Icon type="gitlab" />
                </SocialLinks>
                <Link to='/ProductPage#harry'>
                    <Button type="primary" style={{float:'right', margin:'0 10% 0 0'}}>Detail</Button>
                </Link>
            </ItemWapper>
         
        );
  
}

export default ProjectItem;