import styled from 'styled-components'
import {SectionWapper} from '../basicStyle'

export const IntroWrapper = styled(SectionWapper)`
height:100vh;
padding-top:10%;
padding-bottom:2%;
overflow:hidden;
.description{
    margin:5% auto;
    text-align:center;
    color:white;
}

@media only screen and (min-width:320px) and (max-width:480px){
    padding-top:30%;
    .description{
        margin:23% auto; 
    }
}

@media only screen and (min-width:768px) and (max-width:1366px){
    padding-top:10%;
}
`

export const IntroBackground = styled.div`
z-index:40;
width:100%;
min-height:100%;
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
        a{
            color:black;
        }
		div{
			width:120px;
			height:30px;
			border:1px solid black;
			text-align:center;
			line-height:30px;
			transition:0.4s ease;
			&:hover{
				a{
                    color:white;
                }
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

export const OverlayWrapper = styled.div`
overflow:hidden;
width: 100%;
height: 100vh;
z-index: 100;
background-color:white;
position:fixed;
top:0;
left:0;
.overlay-text{
	position:absolute;
	width:100%;
	top:50%;
	text-align:center;
	font-size:3rem;
	font-weight:900;
}
@media only screen and (max-width:480px){
	.overlay-text{
		font-size:1.5rem;
	}
}
`
export const IntroOverlayWrapper = styled(OverlayWrapper)`
background-color:black;
z-index:90;
`



export const JobSectionWrapper = styled(SectionWapper)`
min-height:100vh;
.job-des{
    font-size:1rem;
    margin-left:10%;
    margin-bottom:30px;
    @media only screen and (max-width:480px){
         margin-left:5%;
    }
}
`


export const JobItemWrapper = styled.div`
width:100%;
box-sizing:border-box;
overflow:hidden;
display:flex;
flex-direction:column;
margin:0 5%;
.iconTitle{
    font-size:40px;
    margin-bottom:20px;
    color:black;
}

.title{
    font-size:1.2rem;
    font-weight:bold;
    color:black;
}

.des-container{
    display:flex;
    flex-direction:row;
    width:100%;
    align-items:center;

    .icon{
        margin-right:10px;
        vertical-align:middle;
        font-size:1.2rem;
    }

    .des{
        font-size:1rem;
        margin-top:20px;
        margin-bottom:20px;
    }
}

@media only screen and (max-width:480px){
    margin: 20px 5%;
    .des-container{
        .des{
            font-size:0.9rem;
        }
    }
}

@media only screen and (max-width:320px){
     margin: 15px 0px;
    .title{
       font-size:1rem;
     }
      .des-container{
        .des{
            font-size:0.9rem;
        }
    }
}
`

export const SkillSectionWrapper = styled(SectionWapper)`
.skill-des{
    font-size:1rem;
    margin-left:10%;
    margin-bottom:30px;
    @media only screen and (max-width:480px){
         margin-left:5%;
    }
}

.skill-subtitle{
    margin-left:5%;
    margin-bottom:30px;
    color:black;
    font-size:1.2rem;
    font-weight:bold;
}
`

export const SkillItem = styled.div`
box-sizing:border-box;
overflow:hidden;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
width:100%;
font-size:1rem;
.icon{
    font-size:25px;
    width:25px;
    height:25px;
    margin-right:25px;
};

@media only screen and (min-width:320px) and (max-width:480px){
    font-size:12px;
    .icon{
        font-size:18px;
        width:18px;
        height:18px;
        margin-right:12px;
    }
}
`

export const TimelineWrapper = styled(SectionWapper)`
`

export const TimelineDescription = styled.p`
font-size:1.5rem;

:hover{
    color:#3B5998;
}

@media only screen and (min-width:320px) and (max-width:480px){
    font-size:0.9rem;
}
`


export const ExperienceWrapper = styled(SectionWapper)`

`

export const BlogsWrapper = styled(SectionWapper)`
`

export const BlogItemWrapper = styled.div`
margin:2% 0;
width: 90%;
height:300px;
border-radius:4px;
box-sizing:border-box;
box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
:hover{
    transform: translateY(-0.25rem);
    box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
}

.img-container{
    height:100%;
    width:100%;
    object-fit:cover;
    transform: scale(0.8, 0.8);
}

.blog-content-container{
    width:100%;
    height:70%;
    margin-top:20%;
    padding-left:5%;
    padding-right:5%;
    padding-bottom:15px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;

    .author-container{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        
        .author-avatar{
            width:50px;
            height:50px;
            border-radius:100%;
            object-fit:contain;
        }

        .author-name{
            font-size:1rem;
            color:black;
            margin-left:15px;
        }
    }

    .blog-title{
        font-size:1.5rem;
        font-weight:900;
        color:black;
    }

    .blog-subtitle{
        font-size:1.2rem;
        font-weight:bold;
        text-align:left;
    }

    .blog-date{
        width:100%;
        font-size:1rem;
        text-align:right;
    }

}

@media only screen and (min-width:320px) and (max-width:480px){
    height:100%;
    margin:30px 0;
    .blog-content-container{
        margin-top:5%;
         .author-container{
             margin-bottom:10px;
         }
         .blog-title{
              margin-bottom:10px;
         }
         .blog-subtitle{
              margin-bottom:10px;
         }

    }
}
  
`

export const FooterWrapper = styled(SectionWapper)`
height:360px;
color:white;
.thanks{
    font-size:3.5rem;
    font-weight:900;
    color:white;
}

.footer-title{
    font-size:1.5rem;
    font-weight:900;
    text-align:center;
    margin-bottom:5%;
}

.follow-container{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    .follow-item{
        width:50px;
        height:80%;
        border-radius:100%;
        margin:0 10px;
        object-fit:cover;
        transition:all 0.3s linear;
        &:hover{
             transform:scale(1.2,1.2)
        }
    }
}

.contact-container{
    width:100%;
    height:150px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;

    .contact-item{
        width:100%;
        font-size:1rem;
    }
}

@media only screen and (max-width:480px){
    height:100%;
    padding-top:40px;
    .thanks{
        font-size:2rem;
        text-align:center;
        margin-bottom:40px;
    }

    .footer-title{
        font-size:1.3rem;
    }

    .follow-container{
         margin-bottom:40px;
    }

    .contact-container{
         height:150px;
         margin-bottom:40px;
         .contact-item{
             font-size:0.9rem;
         }
    }
}

@media only screen and (min-width:480px){
  padding:5%;
}

`
