import React from 'react';
import {Row,Col,Avatar} from 'antd'
import '../style.css' 
const Author =({name,avatarSrc})=> {
        return (
            <div>
                <Row type='flex' justify='start' align="middle">
                   
                   <Col xl={1} lg={1} md={1} sm={2} xs={2}>
                         <Avatar className='avatar' size={60} src={avatarSrc}/>
                   </Col>

                    <Col xl={20} lg={20} md={10} xs={22}>
                   <div className='authorDes'>Written by  who lives <b>{name?name:""}</b> who works in Toronto building useful things. Loving 
                   React, Gatsby</div>   
                   </Col>

                </Row>
            </div>
        );
}

export default Author;