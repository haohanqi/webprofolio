import { Link } from "gatsby"
import React from "react"
import {Row,Col} from 'antd'
import {NavWapper,NavItem,Logo} from './basicStyle'

const Header = ({  }) => (
  <NavWapper>
     <Row type="flex" justify="start">
         <Col xl={12} lg={12} md={12} sm={12} xs={12} align="left">
            <Link className='link'><Logo>Home</Logo></Link>
         </Col>

         <Col xl={4} lg={4} md={4} xs={4} sm={4}>
           <NavItem>
               <Link className='link' to='/ProductPage/'>Project</Link>
           </NavItem>
         </Col>
         
         <Col xl={4} lg={4} md={4} xs={4} sm={4} >
            <NavItem>
               <Link className='link' to='/ProductPage/'>Dailty </Link>
            </NavItem>
         </Col>
         
         <Col xl={4} lg={4} md={4} xs={4} sm={4} >
           <NavItem>
              <Link className='link'  to='/contactUs'>Contact</Link>
           </NavItem>
          </Col>     
     </Row>     
  </NavWapper>
)

export default Header
