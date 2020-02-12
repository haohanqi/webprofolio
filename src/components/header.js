import { Link } from "gatsby"
import React from "react"
import {Row,Col} from 'antd'
import {NavWapper,NavItem,Logo} from './style'

const Header = ({ siteTitle }) => (
  <NavWapper>
     <Row  type="flex"  align="middle" >
         <Col span={3}><Logo>ASH</Logo></Col>
         <Col span={3} offset={12}>
           <NavItem>
               <Link className='link'>Home</Link>
           </NavItem>
         </Col>
         
         <Col span={3}>
            <NavItem>
               <Link className='link'>Project</Link>
            </NavItem>
         </Col>
         
         <Col span={3}>
           <NavItem>
              <Link className='link'>Contact</Link>
           </NavItem>
          </Col>     
     </Row>     
  </NavWapper>
)

export default Header
