import React from 'react'
import {ProductWapper,ProductImage} from '../components/style'
import Rating from '../components/Rating'
import {Row,Col,Tabs} from 'antd'


const HarryProduct = ()=>{
    return (
        <ProductWapper>
            <Row type='flex' justify='space-around'>
            <Col xl={12} lg={12} md={20} sm={22} xs={22}>
                <ProductImage>
                    <img alt='product image' src='https://images.unsplash.com/photo-1548827752-6301e20b3be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'></img>
                    <div>
                        <Rating></Rating>
                    </div>
                </ProductImage>
            </Col>

            <Col xl={12} lg={12} md={20} sm={22} xs={22}>
                <h5>Manga List Project</h5>
                <Tabs>
                    <Tabs.TabPane key="0" tab={<h6>Description</h6>}>
                        <div>
                            des
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane key="1" tab={<h6>Tech Stack</h6>}>
                        <div>
                            des
                        </div>
                    </Tabs.TabPane>
                </Tabs>
                    
            </Col>
         
         
         </Row>
            


          
           </ProductWapper>
        
    )
}

export default HarryProduct