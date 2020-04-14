import React from 'react';
import {Row,Col,Avatar} from 'antd'
import '../style.css' 
const Author =({name,avatarSrc})=> {
        return (
            <div>
                <Row type='flex' justify='start' align="middle">
                   
                   <Col md={1} xs={2}>
                         <Avatar className='avatar' size={60} src={avatarSrc}/>
                   </Col>

                   <Col md={10} xs={22}>
                   <div className='authorDes'>Written by  who lives <b>{name?name:""}</b> who works in Toronto building useful things. Loving 
                   React, Gatsby</div>   
                   </Col>

                </Row>
            </div>
        );
}

export default Author;