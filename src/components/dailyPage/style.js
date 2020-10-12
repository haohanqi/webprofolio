import styled from 'styled-components'

export const DailySectionContainer = styled.div`
flex-shrink:0;
height:100%;
width:100%;
background-color:${props => props.backgroundColor};
box-sizing:border-box;
`
export const DailyPageContainer = styled.div`
display:flex; 
overflow-x: hidden; 
overflow-y: hidden;
height: 100vh;
width: 100%;
`

export const BackHomeButtonWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
width:100%;
height:60px;
font-size:1.3rem;
font-weight:900;
padding-left:15px;
.icon{
	display:flex;
	justify-content:center;
	align-items:center;
	border-radius:100%;
	width:2rem;
	height:2rem;
	color:black;
}

.text{
	width:80%;
	text-align:center;
	color:black;
    position:relative;
    &:after{
        position:absolute;
        right:0;
        content:'';
        display:block;
        width:0;
        height:3px;
        background-color:white;
        transition:0.4s ease;
    }
}

&:hover{
	.text:after{
        width:100%;
        left:0;
        background-color:black;
	}
	
	.icon{
		font-weight:900;
	}

}
`
export const DailyIntroContentWrapper = styled.div`
width:100%;
height:90vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding-top:60px;
box-sizing:border-box;
color:${props=>props.color};

.content-title{
	width:50%;
	opacity:0;
	font-size:1.5rem;
	font-weight:900;
}

.content-des{
	width:50%;
	opacity:0;
	font-size:1rem;
	margin-top:20px;
}

.next-button{
	width:50%;
	opacity:0;
	cursor:default;
	font-size:0.8rem;
	margin-top:20px;
	div{
		width:120px;
		height:30px;
		border:1px solid ${props => props.borderColor};
		text-align:center;
		line-height:30px;
		transition:0.4s ease;
		&:hover{
			color:${props => props.hoverColor};
			background-color:${props => props.buttonHoverBackground};
		}
	}

}

@media only screen and (max-width:480px){
	height:50vh;
	justify-content:flex-start;

	.content-title{
		width:90%;
		font-size:1.2rem;
	}

	.content-des{
		width:90%;
		font-size:0.8rem;
	}

	.next-button{
		width:90%;
	}

}

@media only screen and (max-width:320px){
	height:55vh;
	justify-content:flex-start;
	
}


`

export const DailyImage = styled.div`
position:relative;
width:${props=>props.width};
height:${props => props.height};
opacity:100;
overflow:hidden;
cursor:default;
.hover-text-container{
	position:absolute;
	top:0;
	left:0;
	z-index:1;
	display:flex;
	flex-direction:column;
 	justify-content:center;
	align-items:center;
	height:0%;
	width:100%;
	opacity:0;
	.hover-text-title{
		font-size:3rem;
		.highlight{
			font-size:4rem;
			font-weight:900;
		}
	}

	.hover-button{
		font-size:1rem;
		font-weight:bold;
		display:flex;
		flex-direction:row;
		justify-content:space-around;
		align-items:center;
		height:30px;
		width:50%;
		color:black;
		.hover-icon{
			vertical-align:middle;
			font-size:25px;
		}
	}
}

img{
	overflow:hidden;
	object-fit:cover;
	width:100%;
	height:100%;
	transition:all 0.3s ease;
}


@media only screen and (max-width:480px){
	width:50%;
	height:220px;
}

@media only screen and (max-width:320px){
	width:60%;
	height:220px;
}

}
`


export const DailyPageOverlaryWrapper = styled.div`
position:fixed;
visibility:hidden;
top:0;
left:0;
right:0;
bottom:0;
width:100%;
height:100vh;
z-index:40;
.top-overlay{
	width:100%;
	height:50%;
	background-color:black;
}

.bottom-overlay{
	width:100%;
	height:50%;
	background-color:black;
}

.overlay-text-container{
	width:100%;
	height:30%;
	text-align:center;
	position:absolute;
	top:35%;
	font-size:3rem;
	line-height:25vh;
	color:white;
	font-weight:600;
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	align-items:center;
}

.overlay-text{
	width:20%;
}

.process{
	height:5px;
	width:40%;
	background-color:white;
}

@media only screen and (max-width:480px){
	.overlay-text-container{
		font-size:1.2rem;
	}

	.overlay-text{
		width:30%;
	}

	.process{
		height:5px;
		width:30%;
		background-color:white;
	}
}


`

export const DailyDogDetailsWrapper = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:#fafafa;
z-index:10;
color:black;

.details-container{
	width:25%;
	height:80%;
	margin:5% 35%;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	background-color:white;
	border-radius:20px;
}

.coverImg{
	flex:3;
	width:100%;
	height:100%;
	background-color:red;
	border-radius:20px;
	overflow:hidden;
	img{
		width:100%;
		height:100%
		transition:all 0.3s ease;
	}
}

.detail-content-container{
	flex:3;
	width:100%;
	height:100%;
	padding:5%;
	display:flex;
	flex-direction:column;
	justify-content:space-around;
	align-items:flex-start;
	.title{
		flex:1;
		font-size:1.5rem;
		font-weight:bold;
	}
	.detail-content{
		flex:3;
		font-size:1rem;
		font-weight:500;
	}

}

.follow{
	flex:1;
	padding-right:5%;
	width:100%;
	display:flex;
	flex-direction:row;
	justify-content:flex-end;
	align-items:center
}

.closeButton-container{
	position: absolute;
	top:30px;
	right:100px;
	color:black;
	.closeButton{
		font-size:40px;
	}
}

@media only screen and (max-width:480px){
	.details-container{
		width:90%;
		margin:15% 5%;
	}

	.closeButton-container{
		top:10px;
		right:20px;
		.closeButton{
			font-size:25px;
		}
	}
}



`

export const DailyDogDetailsBackground = styled.div`
position:absolute;
width:100%;
height:100vh;
top:0;
left:0
z-index:30;
.row{
	height:33.333%;
}
.background-text{
	z-index:30;
	width:100%;
	height:100%;
	font-size:160px;
	font-weight:bold;
	color:black;
	opacity:0.3;
}

@media only screen and (max-width:480px){
	.background-text{
		font-size:60px;
	}
}


`

export const DailyDogDetailsOverlayWrapper = styled.div`
z-index:20;
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;
display:none;
flex-direction:row;
justify-content:space-around;
align-items:center;
.dogDetails-overlay-col{
	flex:1;
	height:100%;
	background-color:black;
	display:flex;
	justify-content:center;
	align-items:center;
	.dogDetails-overlay-text{
		text-align:center;
		color:white;
		font-size:3rem;
		font-weight:bold;
	}
}

`

