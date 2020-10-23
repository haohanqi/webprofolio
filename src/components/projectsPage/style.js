import styled from 'styled-components'
import {SectionWapper} from '../basicStyle'

export const ProjectWrapper = styled(SectionWapper)`
padding-bottom:0;
height:100vh;
.next-button{
    width:100px;
    cursor:default;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size:1.5rem;
    font-weight:900;
    margin-top:10%;
    color:black;
    .icon{
        margin-top:10px;
    }
    .verticalLine{
        width:1px;
        background-color:black;
        height:0px; 
        transition:all 0.6s linear;
    }
    

    &:hover{
        .verticalLine{
            height:40px;
         }
    }
}

.backToTop-button{
    font-size:1.5rem;
    font-weight:900;
    margin-top:10%;
    color:black;
    transition:all 0.6s linear;
    cursor:default;
    &:hover{
        transform:scale(1.2)
    }
}

.project-des{
    font-size:1rem;
    margin-left:10%;
    margin-bottom:30px;
    @media only screen and (max-width:480px){
         margin-left:5%;
    }
}

.project-items-container{
	margin-left:5%;
}

.project-img-container{
	width:90%;
	height:400px;
    margin-left:5%;
    margin-bottom:8%;
    .project-img{
        object-fit:contain;
        transition:all 0.3s linear;
        &:hover{
            transform: scale(1.2,1.2);
        }
    }
}

.tabDes{
    width:100%;
    height:100%;
    background-color:white;
    padding:5%;
    font-size:1rem;
}

@media only screen and (max-width:768px){
    height:100%;
    padding-bottom:5%;
    .projectCover{
        height:100%;
        margin-bottom:30px;
    }

    .project-img-container{
        height:300px;
        margin-left:0;
       .project-img{
           transition:none;
           &:hover{
            transform: none;
           }
       }
    }

    .next-button{
        display:none;
    }

     .backToTop-button{
        display:none;
    }
}
`

export const ProjectItemWrapper = styled.div`
box-sizing:border-box;
width:90%;
height:150px;
background-color:${props => props.backgroundColor};
margin-bottom:20px;
margin-left:5%;
margin-right:5%;
padding:4%;
border-radius:15px;
cursor:default;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:start;
overflow:hidden;
transition: all 0.6s;

.title{
	font-size:1.2rem;
	font-weight:bold;
    color:white;
}


.des{
    line-height:1.5;
    color:white;
}

.seeMore{
	width:100%;
	text-align:right;
}

&:hover{
    background-color:black;
    .icon{
        color:#61dafb;
    }    
}
`

