import styled from 'styled-components'
import {SectionWapper} from '../style'

export const ProjectWrapper = styled(SectionWapper)`
padding-bottom:0;
height:100vh;

.back-button{
    width:100px;
    cursor:default;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size:1.5rem;
    font-weight:900;
    margin-top:5%;
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

.project-img{
	width:90%;
	height:400px;
    background-color:red;
    margin-left:5%;
}

.tabDes{
    width:100%;
    height:100%;
    background-color:white;
    padding:5%;
    font-size:1rem;
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
