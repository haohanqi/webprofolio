import React from 'react'
import { NavMenuWrapper, MenuItem, MenuWrapper} from './style'
import {Link} from 'gatsby'
import {Row,Col} from 'antd'
const NavMenu = () => {
	return (
		<NavMenuWrapper className="NavMenuContainer">
			<Row type="flex" justify="space-around" align="center">
				
				<Col xl={8} lg={8} md={12} sm={24} xs={24} align="center">
					<MenuWrapper className="menu">
						<MenuItem>
							<a className="subtitle">Menu</a>
						</MenuItem>
						<MenuItem>
							<Link className="page" to="/">Home</Link>
						</MenuItem>
						<MenuItem>
							<Link className="page" to="/projectPage">Project</Link>
						</MenuItem>
						<MenuItem>
							<Link className="page" to="/daliyPage">Daily</Link>
						</MenuItem>
						<MenuItem>
							Contact
						</MenuItem>
					</MenuWrapper>
				</Col>
				
				<Col xl={6} lg={6} md={10} sm={0} xs={0} align="left">
					<MenuWrapper className="menu">
						<MenuItem>
							<a className="subtitle">Contact Me</a>
						</MenuItem>
						<MenuItem>
							<a className="des">Phone: 647-829-5577</a>
						</MenuItem>
						<MenuItem>
							<a className="des">Email: haohanqiharry@gmail.com</a>
						</MenuItem>
						<MenuItem>
							<a className="des">Location:107 avondale ave</a>
						</MenuItem>
					</MenuWrapper>
				</Col>

				<Col xl={5} lg={5} md={0} sm={0} xs={0} align="left">
					<MenuWrapper className="menu" style={{}}>
						<MenuItem>
							<a className="subtitle">About Me</a>
						</MenuItem>
						<MenuItem>
							<p className="des">Half reader, Half coder. Reading helps me Understand the world, Coding helps me build the world</p>
						</MenuItem>
						<MenuItem>
							<p className="des">I am Web Developer, UI / UX Designer and Mobile App developer </p>
						</MenuItem>	
					</MenuWrapper>
				</Col>
			</Row>

			<div className="socialMedia">
				<Row type="flex" justify="space-around">
					<Col>facebook</Col>
					<Col>ins</Col>
					<Col>github</Col>
					<Col>in</Col>
				</Row>
			</div>
			
		</NavMenuWrapper>
	)
}

export default NavMenu
