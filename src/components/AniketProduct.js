import React from 'react'
import {TitleWapper,ProductWapper,ProductImage,ProductComments} from '../components/style'
import Author from '../template/componments/Author'
import {Comment,Avatar} from 'antd'
import CheckingBox from'../components/CheckingBox'


const AniketProduct = ()=>{
    return (
        <ProductWapper>
        <TitleWapper id='aniket'>
           
             <Author  name='Aniket Patel' avatarSrc='https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_960_720.jpg'/>
             <span style={{border:'1px solid black', width:'50%'}}></span>
            
        </TitleWapper>    
           <ProductImage>
                <img src='https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_960_720.jpg'></img>
                <div>
                   <CheckingBox></CheckingBox>
                </div>
           </ProductImage>
           <ProductComments>


              <Comment author='Aniket Patel'
                      // actions={[<span key="comment-nested-reply-to">Reply to</span>]}
                       avatar={
                            <Avatar
                                src="https://qph.fs.quoracdn.net/main-qimg-11ef692748351829b4629683eff21100.webp"
                                 alt="Aniket Patel"
                            />
                       }
                       content={<p> 
                        <ul>
                          <li>Watch zoom and enjoy it!</li>
                          <li>Talk with your friends</li>
                          <li>Can also share the screen</li>
                          <li>Can join upto 100 users</li>
                          <li>Can record the video</li>
                          <li>Can use the recording for follow up purpose</li>
                          <li>Only $19.99 per month per user</li>
                          <li>Quite user friendly interface</li>
                          <li>Good compared to webex</li>
                        </ul> 
                   </p>}>
               </Comment>       
           </ProductComments>
        
           </ProductWapper>
        
    )
}

export default AniketProduct