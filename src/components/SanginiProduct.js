import React, { Component } from 'react';
import {TitleWapper,ProductWapper,ProductImage, FlipperCard, CardWrapper} from '../components/style'
import Author from '../template/componments/Author'

class SanginiProduct extends Component {
          constructor(){
              super();
              this.state = {
                  detail:[{title:"Holiday Calendar App", back:"It is an Android App which displays the Name of Festivals when we select on a particular date in the Calendar. "},
                         {title:"API Fetching Data", back:"API is used to fetch the holiday data for the App"}]
              }
          }
          render() {
              return (

               <ProductWapper>
                    <TitleWapper id='Sangini'>
                         <Author  name='Sangini Gupta' avatarSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5ybxJzkzJ6bEBB60arzwMBZupXi_EsuqnedbUy6lUr-F0ADCh&usqp=CAU'/>
                         <span style={{border:'1px solid black', width:'50%'}}></span>
                    </TitleWapper>

                    <ProductImage>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8Y7Ywsj_camcxPS7jYtroWZ2Ph5I_Qdhp3BVOP8pexIyELbLF&usqp=CAU'></img>
                    </ProductImage>

                  <CardWrapper>
                      {
                          this.state.detail.map((data, key) => {
                              return(
                                  <FlipperCard key={key}>
                                      <div className='front'>
                                          {data.title}
                                      </div>
                                      <div className='back'>
                                          {data.back}
                                      </div>
                                  </FlipperCard>
                              )
                          })
                      }
                  </CardWrapper>
               </ProductWapper>
              );
          }
      }
      
      export default SanginiProduct;