import styled from 'styled-components'


//common style------------------------------------------------
export const TitleWapper = styled.div`
margin: 5% 10%;
span{
    margin-top:3%;
    display:block;
    border:1px solid white;  
}
`
export const Title = styled.div(props=>({
   color: props.color,
   fontSize: props.size,
   textAlign:props.textAlign,
   margin:props.margin,
}))

export const SectionWapper = styled.div`
width:100%;
background-color:black;
`

//----------------------------------------



export const NavWapper = styled.div `
background-color: #F1F0F0;
height:68px;
`


export const NavItem = styled.div `
text-align:center;
line-height:68px;
.link{
    color:black;
}

:hover{
    background-color:#DEDCDC;
    .link{
        font-size:16px;
    }
}
`

export const Logo = styled.div`
text-align:center;
font-size:25px;
font-weight:bolder;
`

export const IntroWapper = styled.div`
width:100%;
background-color:black;
padding-top:5%;
padding-bottom:5%;
.title{
    text-align:center;
    color:white;
    font-size:35px;
}
.description{
    margin:5% auto;
    text-align:center;
    color:white;
    font-size:20px;
}
`

export const Tag = styled.div`
color:white;
font-size:20px;
margin:30% auto 10% auto;
font-weight:bolder;
:hover{
    font-size:22px;
    color:#BFBFBF;
}
`

export const MemberWapper = styled(SectionWapper)`
background-color:#BFBFBF;
`

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
}
.description{
    margin-bottom:5%;
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

export const BlogsWapper = styled(SectionWapper)`
background-color:white;
`

export const BlogItemWapper = styled.div`
margin:5% auto;
width: 100%;
padding-bottom:5%;
//border:1px solid black;
border-radius:25px;
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

`

