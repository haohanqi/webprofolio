import styled from 'styled-components'
import {SectionWapper} from '../basicStyle'

export const ContactWrapper = styled(SectionWapper)`
height:100vh;
padding:0;

.contact-img-container{
	width:100%;
	height:100%;
	padding:10%;
	display:flex;
	align-items:center;

	.contact-img{
		width:80%;
		height:80%;
	}
}

.contact-info-container{
	width:100%;
	height:100%;
	padding:10%;
	display:flex;
	flex-direction:column;
	justify-content:space-around;
	align-items:center;

	.contact-title{
		flex:1;
		font-size:1.2rem;
		font-weight:bold;
	}

	.contact-subtitle{
		flex:1;
		font-size:1.5rem;
		font-weight:900;
		color:black;
	}

	.contact-form-container{
		flex:8;
		width:100%;
		display:flex;
		flex-direction:column;
		justify-content:space-around;
		align-items:center;

		input,textarea{
			width:60%;
			outline:none;
			transition:0.3s;
			padding:10px;
			border: 1px solid black;
			background-color:#fafafa;
			font-size:1rem;
			&:focus{
				border: 2px solid black;
			}
			
		}

		.formInput{
			height:40px;
		}

		.messageInput{
			height:200px;
		}

		.submit-button{
			width:100px;
			height:35px;
			line-height:1rem;
			background-color:black;
			color:white;
		}
	}
}

@media only screen and (min-width:1700px){
   padding:0;
}

@media only screen and (max-width:480px){
	height:100%;

	.contact-info-container{
		min-height:700px;
		
		.contact-title{
			font-size:1rem;
		}

		.contact-subtitle{
			font-size:1rem;
		}

		.contact-form-container{
			input,textarea{
				width:100%;
				font-size:0.9rem;
			}	
		}
	}

}


`