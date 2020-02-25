import styled from 'styled-components'


//common style------------------------------------------------
export const TitleWapper = styled.div`
margin: 5% 10%;
span{
    margin-top:3%;
    display:block;
    border: ${props => props.white ? "1px soild white" : "1px solid black"};
}
`
export const Title = styled.div(props=>({
   color: props.color,
   fontSize: `3.5vw`,
   textAlign:props.textAlign,
   margin:props.margin,
}))

export const SectionWapper = styled.div`
width:100%;
background-color:black;
`

//----------------------------------------


//Header section--------------------------------
export const NavWapper = styled.div `
z-index:1;
background-color: black;
height:50px;
width:100%;
position:fixed;
@media only screen and (min-width:320px) and (max-width:480px){
    height:50px;
}
`


export const NavItem = styled.div `
text-align:center;
line-height:60px;
font-size:1.8vw;
.link{
    color:white;
}

:hover{
    
    .link{
        font-size:2vw;
        color:#DEDCDC
    }
}

@media only screen and (min-width:320px) and (max-width:480px){
    line-height:50px;
}
`

export const Logo = styled.div`
text-align:center;
font-size:1.8vw;
font-weight:bolder;
color:white
`
//-----------------------------------------



//introduction section -----------------------------------------------------
export const IntroWapper = styled.div`
width:100%;
background-color:black;
padding-top:5%;
padding-bottom:2%;

.description{
    margin:5% auto;
    text-align:center;
    color:white;
    font-size:2vw;
}

@media only screen and (min-width:320px) and (max-width:480px){
    padding-top:30%;
    .description{
        margin:23% auto;  
        font-size:3vw;
    }

}

@media only screen and (min-width:768px) and (max-width:1366px){
    padding-top:10%;
}
`

export const Tag = styled.div`
color:white;
font-size:2.5vw;
margin:5% auto 15% auto;
font-weight:bolder;
:hover{
    font-size:2.7vw;
    color:#BFBFBF;
}
`
//-----------------------------------------------------------




export const MemberWapper = styled(SectionWapper)`
background-color:white;
`


//project section---------------------------------------
export const ProjectItemWapper = styled(SectionWapper)`
`

export const ItemWapper = styled.div`
overflow:hidden;
width:80%;
margin:10% 10%;
background-color:white;
border-radius:10px;
color:white;
padding: 5% 5%;
border-radius:4px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

:hover{
    transform: translateY(-0.25rem);

}


`
export const ItemContent = styled.div`
float:right;
margin-left:5%;
margin-bottom:10%;
height:90%;
width:45%;
color:black;
.title{
    margin-bottom:5%;
    font-weight:bolder;
    font-size:1.5vw;
}
.description{
    margin-bottom:5%;
    font-size:1vw;
}

@media only screen and (min-width:320px) and (max-width:480px){
    font-size:3vw;
    .title{
        font-size:4.5vw;
    }
    .description{
        font-size:3.5vw;
    }
}

`
export const Cover = styled(ItemContent)`
float:left;
margin-left:0;
margin-bottom:0;
img{
    height:100%;
    width:100%;
    object-fit:contain;
}
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
`

export const SocialLinks = styled.div`
float:left;
text-align:center;
margin:5% 20% 10% 0%;
height:10%;
width:45%;
color:black;
font-size:18px;
i{
    margin:0 5%;
}
`
//-----------------------------------------------


//TimeLine section--------------------------------
export const TimelineWapper = styled(SectionWapper)`
background-color:black
`

export const TimelineDescription = styled.p`
font-size:2vw;
color:white;

:hover{
    color:#3B5998;
}


@media only screen and (min-width:320px) and (max-width:480px){
    font-size:3.5vw;
}

`

//-------------------------------


//blog section -----------------------------------------

export const BlogsWapper = styled(SectionWapper)`
background-color:white;
`

export const BlogItemWapper = styled.div`
margin:5% auto;
width: 90%;
padding-bottom:5%;
//border:1px solid white;
border-radius:4px;
box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

:hover{
    transform: translateY(-0.25rem);
    box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;

}
.date{
    margin:0% 10% 0 10%;
    font-weight:bold;
}

.title{
    margin:5% 10% 0 10%;
    font-weight:bolder;
    font-size:20px;
}

.content{
    margin:5% 10%;
    font-size:18px;
}

.author{
    margin:5% 10% 0 10%;
    font-weight:bold;
}

button{
    margin:0% 10% 0 10%;
}

@media only screen and (min-width:320px) and (max-width:480px){

}
  
`

//------------footer

export const AboutUs = styled.div`
text-align:center;
color:white;

`

export const WorkLinks= styled.div`
text-align:center;
color:white;
`
export const ContactInfo = styled.div`
text-align:center;
color:white;
`

export const FooterTitle = styled.div`
font-weight:bold;
margin:5% auto;
`

export const FooterDescription = styled.p`
width:90%;
margin:3% auto;
color:#ABABAB;
text-align:center;
:hover{
    color:white;
}

i{
    margin:0% 2%
}

`