import { Link } from "gatsby"
import React from "react"
import {Row,Col} from 'antd'
import {NavWapper,NavItem,Logo} from './style'

const Header = ({ siteTitle }) => (
  <NavWapper>
     <Row  type="flex"   align="middle" >
         <Col span={3} ><Logo>ASH</Logo></Col>
         <Col xs={3} md={4} offset={9} >
           <NavItem>
               <Link className='link' to='/'>Home</Link>
           </NavItem>
         </Col>
         
         <Col xs={3} md={4}>
            <NavItem>
               <Link className='link' to='/ProductPage/'>Project</Link>
            </NavItem>
         </Col>
         
         <Col xs={3} md={4}>
           <NavItem>
              <Link className='link'>Contact</Link>
           </NavItem>
          </Col>     
     </Row>     
  </NavWapper>
)

export default Header
