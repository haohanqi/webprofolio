import React from 'react'
import {TitleWapper,Title,ProductWapper,ProductImage,ProductComments} from '../components/style'
import Rating from '../components/Rating'
import Author from '../template/componments/Author'
import {Comment,Avatar,Row,Col} from 'antd'


const HarryProduct = ()=>{
    return (
        <ProductWapper>
        <TitleWapper id='harry'>
           
             <Author  name='Hao HanQi' avatarSrc='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'/>
             <span style={{border:'1px solid black', width:'50%'}}></span>
            
        </TitleWapper>    
           <ProductImage>
                <img src='https://images.unsplash.com/photo-1548827752-6301e20b3be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'></img>
                <div>
                   <Rating></Rating>
                </div>
           </ProductImage>
           <ProductComments>


              <Comment author='Hao HanQi'
                       actions={[<span key="comment-nested-reply-to">Reply to</span>]}
                       avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                 alt="Hao HanQi"
                            />
                       }
                       content={<p>Manga App for manga funs in the world, watch manga and animation online</p>}
                    >
                    <Comment author='Customer'
                             actions={[<span key="comment-nested-reply-to">Reply to</span>]}
                             avatar={
                                <Avatar
                                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                    alt="Hao HanQi"
                                />
                            }
                            content={<p>What kind of functionalities does it have?</p>}>
                    </Comment>

                    <Comment author='Customer'
                             actions={[<span key="comment-nested-reply-to">Reply to</span>]}
                             avatar={
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Hao HanQi"
                                />
                            }
                            content={<p> 
                                         <ol>
                                           <li>Watch manga and animation online</li>
                                           <li>Social with all manga funs from different coutries</li>
                                           <li>Upload your mange become our signed author</li>
                                         </ol> 
                                    </p>}>

                                    <Comment author="Custome"
                                             actions={[<span key="comment-nested-reply-to">Reply to</span>]}
                                             avatar="https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                             content={<p>It's a really good work</p>}
                                             />
                    </Comment>

               </Comment>       
           </ProductComments>
        
           </ProductWapper>
        
    )
}

export default HarryProduct