import React, { Component } from 'react';
import {Row,Col,Avatar} from 'antd'
import '../style.css' 
const Author =({name,avatarSrc})=> {
     console.log(name)
        return (
            <div>
                <Row type='flex' justify='start'>
                   
                   <Col>
                     <div>
                         <Avatar className='avatar' size='large' icon="user"/>
                         <div className='authorDes'>Written by  who lives <b>{name?name:""}</b> who works in Toronto building useful things. Lovinv 
                            React, Gatsby</div>
                     </div>
                   </Col>

                   
                </Row>
            </div>
        );
}

export default Author;