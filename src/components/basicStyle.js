import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';


//common style------------------------------------------------

export const GlobalFontFamily = createGlobalStyle`
body {
    font-family: Lato, sans-serif;
}
`

export const TitleWapper = styled.div`
width:100%;
box-sizing:border-box;
margin: 5% 10%;
font-weight:900;
color:black;

@media only screen and (min-width:320px) and (max-width:480px){
    width:100%;
    margin:10% 5%
}
`

export const Title = styled.div(props=>({
   color: props.color,
   fontSize: `1.8rem`,
   textAlign:props.textAlign,
   margin:props.margin,
}))

export const SectionWapper = styled.div`
width:100%;
background-color:${props=>props.backgroundColor};
box-sizing:border-box;
overflow:hidden;
padding-top:5%;
padding-bottom:5%;
padding-left:5%;
padding-right:5%;
@media only screen and (min-width:1700px){
   padding:10% 15%;
}
`

export const BasicButton = styled.div`
width:100%;
cursor:default;
font-size:0.85rem;
margin-top:30px;
color:black;

a{
    color:black;
}

div{
    width:140px;
    height:40px;
    border:1px solid black;
    text-align:center;
    line-height:40px;
    transition:0.4s ease;
    &:hover{
        a{
            color:white;
        }
        background-color:black;
    }
}
`

export const NavHeaderWrapper = styled.div`
width:100%;
z-index:30;
position:fixed;
padding-top:5px;
padding-bottom:5px;
top:0;
left:0;
.name{
   vertical-align:middle;
   font-size:1.5rem;
   font-weight:900;
}
@media only screen and (min-width:320px) and (max-width:480px){
    .name{
        font-size:1.3rem;
    }
}
`

export const NavHumClose = styled.div`
display:none;
flex-direction:column;
justify-content:space-around;
align-items:center;
width:30px;
height:30px;
.cbar{
    height:0px;
    width:0px;
    background-color:black;
}
`
export const NavHumOpen = styled.div`
display:none;
flex-direction:row;
justify-content:space-around;
align-items:center;
width:30px;
height:30px;
.bar{
    height:0px;
    width:0px;
    background-color:black;
}
`

export const NavMenuWrapper = styled.div`
display:none;
opacity:100;
width:100%;
overflow:hidden;
background-color:#fafafa;
padding-top:20px;
padding-bottom:20px;
z-index:10;
position:fixed;
top:30;
left:0;

.socialMedia{
    opacity:0;
    width:30%;
    margin:40px 35% 0px 35%;
}

@media only screen and (min-width:320px) and (max-width:480px){
    .socialMedia{
        width:50%;
        margin:40px 25% 0px 25%;
    }
}
`

export const MenuWrapper = styled.div`
width:100%;
display:flex;
opacity:100;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

export const MenuItem = styled.div`
font-size:1.4rem;
font-weight:900;
width:100%;
a{
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

 .page{
      display:block;
      width:30%;
 }
 
.subtitle{
    font-size:1.2rem;
    color:black;
}

.des{
    font-size:1rem;
    font-weight:600;
    margin-top:20px;
}

&:hover{
    a:after{
        width:100%;
        left:0;
        background-color:black;
    }
}

@media only screen and (min-width:320px) and (max-width:480px){
    font-size:1.4rem;
    a{ 
        width:60%
    }
}
`
