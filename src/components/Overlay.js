import React from 'react'

const Overlay = ()=>{
	return (
		<div className="overlay-container" style={{
			backgroundColor: "white",
			width: "100%",
			height: "100vh",
			zIndex: 100,
			position:'fixed',
			top:0,
			left:0,
		}}>
			<h2 className="overlay-text" style={{position:'absolute',top:"50%",textAlign:"center",width:'100%'}}>" Half Reader, Half Coder "</h2>

		</div>
	)
}

export default Overlay