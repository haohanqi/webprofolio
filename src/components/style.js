import styled from 'styled-components'


//common style------------------------------------------------
export const TitleWapper = styled.div`
width:100%;
box-sizing:border-box;
margin: 5% 10%;
font-weight:900;
color:black;
span{
    margin-top:3%;
    display:inline-block;
    width:70%;
    border: ${props => props.white ? "1px soild white" : "1px solid black"};
}
.avatar{
    margin-top:0%;
}

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

export const ContactButton = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
width:200px;
height:45px;
color:white;
font-weight:800;
font-size:20px;
line-height:45px;
border:2px solid white;
border-radius:15px;
padding-left:5px;
padding-right:5px;
.iconWrapper{
    color:black;
    width:30px;
    height:30px;
    text-align:center;
    line-height:30px;
    border-radius:100%;
    background-color:white;
    vertical-align:middle;
}

.icon{
      vertical-align:middle;
}

@media only screen and (min-width:320px) and (max-width:480px){
    font-size:13px;
    width:150px;
    height:30px;

.icon{
    width:15px;
    height:15px;
    line-height:15px;
    }
}
`
export const BasicButton = styled.div`
    width:100%;
    cursor:default;
    font-size:0.85rem;
    margin-top:30px;
    color:black;
    div{
        width:140px;
        height:40px;
        border:1px solid black;
        text-align:center;
        line-height:40px;
        transition:0.4s ease;
        &:hover{
            color:white;
            background-color:black;
        }
    }
`

//----------------------------------------


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


//Header section--------------------------------
export const NavWapper = styled.div`
width:100%;
position:sticky;
z-index:10;
top:0;
background-color:black;
height:60px;
@media only screen and (min-width:320px) and (max-width:480px){
    height:50px;
}
`


export const NavItem = styled.div `
text-align:center;
line-height:60px;
font-size:25px;
font-family:TrashHand;
.link{
    color:white;
}
:hover{
    .link{
        font-size:27px;
        color:#DEDCDC
    }
}

@media only screen and (min-width:320px) and (max-width:480px){
    font-size:16px;
    line-height:50px;
    :hover{
        .link{
            font-size:20px;
        }
}
}
`

export const Logo = styled.div`
text-align:left;
font-size:25px;
font-weight:bolder;
font-family:TrashHand;
margin-left:10px;
color:white;
line-height:60px;
:hover{
    color:#D5B1D5;
}
@media only screen and (min-width:320px) and (max-width:480px){
    font-size:16px;
    line-height:50px;
}
`
//-----------------------------------------



//introduction section -----------------------------------------------------
export const IntroWapper = styled(SectionWapper)`
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

export const Personal = styled.div`
width: 730px;
height:700px;
margin-left:5%;
margin-right:5%;
margin-bottom:5%;
margin-top:3%;
float:left;
overflow:hidden;
@media only screen and (min-width:320px) and (max-width:480px){
    width:100%;
    float:none;
    height:none;
}
`

export const PersonalImage = styled.img`
width:380px;
height:500px;
border-radius:20px;
margin-left:3%;
margin-top:3%;
float:left;
overflow:hidden;
@media only screen and (min-width:320px) and (max-width:480px){
width:200px;
height:220px;
float:none;
}
`

export const PersonalContent = styled.div`
z-index:1;
position:relative;
left:-110px;
float:right;
overflow:hidden;
margin-right:3%;
margin-top:200px;
margin-left:3%;
padding-left:2%;
width:275px;
height:350px;
font-family:TrashHand;
font-size:33px;
color:white;
transition: 0.6s;
:hover{
    left:0px;
    color:#D2F7F5;
}

@media only screen and (min-width:320px) and (max-width:480px){
    float:none;
    position:static;
    font-size:18px;
    margin-top:60px;
    left:-80px;
    width:90%;
    height:90px;
 }

`

export const Tag = styled.div`
color:white;
font-size:2.5vw;
margin:5% auto 15% auto;
font-weight:bolder;
font-family:TrashHand;

.text{
    color:white;
}

:hover{
    font-size:2.7vw;
    .text{
        color:#D5B1D5;
    }
}
`

export const SocialMediaBar = styled.div`
z-index:40;
float:right;
margin-right:5%;
margin-top:5%;
margin-left:3%;
width:35px;
height:250px;
@media only screen and (min-width:320px) and (max-width:480px){
    display:none;
 }

 @media only screen and (min-width:768px) and (max-width:1023px){
    display:none;
}

`

export const SocialIcon = styled.div`
width:30px;
height:30px;
border-radius:100%;
margin:20px auto;
img{
    width:30px;
    height:30px;
}

transition: 0.3s;
:hover{
    width:33px;
    height:33px;
    img{
        width:33px;
        height:33px;
    }

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
box-sizing:border-box;
overflow:hidden;
width:80%;
margin:10% 0;
background-color:white;
border-radius:10px;
color:white;
padding: 5% 0;
border-radius:4px;



`
export const ItemContent = styled.div`
box-sizing:border-box;
float:right;
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
box-sizing:border-box;
float:left;
text-align:center;

height:10%;
width:45%;
color:black;
font-size:18px;
i{
    margin:0 0%;
}
`
//-----------------------------------------------


//TimeLine section--------------------------------
export const TimelineWapper = styled(SectionWapper)`

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

//-------------------------------


//blog section -----------------------------------------

export const BlogsWapper = styled(SectionWapper)`
background-color:white;
`

export const BlogItemWapper = styled.div`
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

//------------footer

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


//Product Page

export const ProductImage = styled.div`
width:90%;
img{
    display:block;
    height:80%;
    width:100%;
    object-fit:fill;
    box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    :hover{
        transform: translateY(-0.50rem);
       
    }

}

@media only screen and (min-width:320px) and (max-width:480px){
    width:90%;
    margin-left:5%;
    margin-right:5%;

}

`

export const ProductComments = styled.div`
float:right;
margin-left:5%;
margin-right:8%;
padding-left:2%;
padding-right:2%;
width:35%;
background-color:##F4F2F2;
border-radius:5px;
box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

:hover{
    transform: translateY(-0.50rem);
   
}

@media only screen and (min-width:320px) and (max-width:480px){
    float:none;
    width:90%;
    margin-left:5%;
    margin-right:5%;

}


`

export const RatingWapper =styled.div`
margin:8% auto;
text-align:center;
.percentage{
   margin:5% auto;
   font-size:1.5vw;
   width:45%;
}

div{
    margin-bottom:3%;
    font-weight:bold;
}

.counting{    
    font-weight:bold;
    color:#FB4BAE;
    font-size:25px;
}

`
export const CardWrapper = styled.div `
    float:right;
    margin-left:2%;
    margin-right:2%;
    width:40%;
    perspective: 700;
    display:flex;
`

export const FlipperCard = styled.div `
    width: 40% ;
    height: 40%;
    transition:all 0.7s ease;
    transform-style: preserve-3d;
    cursor: pointer;
    margin: 15% auto;

    &:hover{
        transform: rotateY(180deg);
    }
    .back{
        transform: rotateY(180deg);
        background: linear-gradient(45deg, red, blue);
        color: white;
        justify-content:center;
        align-items:center;
    }
    .front{
        background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
        background-size:cover;
        font-weight:bolder;
        font-size:15px;
        color: blue;
        align-items:center;
        
    }

    .front, .back{
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius:10px;
        backface-visibility:hidden;
        display: flex;
        align-items:center;
        justify-content:center;
        box-shadow: 0px 3px 6px gray;
    }
`

//------------------------------


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

//------------------------------

export const JobSectionWrapper = styled(SectionWapper)`
minHeight:100vh;
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

export const ExperienceWrapper = styled(SectionWapper)`

`



