import styled from 'styled-components'

export const IntroWrapper = styled.div`
width:100%;
height:100%;
padding-top:5%;
padding-bottom:2%;
overflow:hidden;
`

export const IntroBackground = styled.div`
z-index:40;
width:100%;
minHeight:100vh;
background-color:#FFAFAF;
padding:15px;
position:fixed;
top:0;
left:0;
right:0;
bottom:0;

.intro-background-title{
	font-size:1.5rem;
	font-weight:900;
	color:black;
	margin-bottom:20px;
	@media only screen and (max-width:320px){
		font-size:1rem;
		margin-bottom:20px;
	}
}



.selfImg{
	height:380px;
	object-fit:contain;
	@media only screen and (max-width:320px){
		height:320px;
	}
}



.next-button-container{
	width:100px;
	height:100px;
	border: 3px solid white;
	border-radius:100%;
	display:flex;
	flex-direction:column;
	justify-content:space-around;
	align-items:center;
	color:black;

	.icon-text{
		font-size:1.2rem;
		font-weight:bold;
	}

	.icon{
		font-size:30px;
	}

	@media only screen and (max-width:480px){
			width:60px;
			height:60px;
			.icon-text{
				font-size:0.8rem;
				font-weight:bold;
			}
			.icon{
				font-size:18px;
			}
	}
}

.intro-background-content{
	width:100%;
	padding-left:10%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:flex-start;
	color:black;
	
	.background-content-title{
		width:50%;
		font-size:1.2rem;
		font-weight:bold;
	}

	.background-content-des{
		width:80%;
		font-size:1.2rem;
		line-height:2;
		margin-top:20px;
	}

	.background-button{
		width:100%;
		cursor:default;
		font-size:0.8rem;
		margin-top:30px;
		div{
			width:120px;
			height:30px;
			border:1px solid black;
			text-align:center;
			line-height:30px;
			transition:0.4s ease;
			&:hover{
				color:white;
				background-color:black;
			}
	    }
	}
	

	@media only screen and (max-width:480px){
		.background-content-des{
			display:none;
		}
		.background-content-title{
			display:none;
		}
}


`