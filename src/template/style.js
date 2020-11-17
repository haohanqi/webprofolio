import styled from 'styled-components'

export const BlogWrapper = styled.article`
width:100%;
padding:5% 15%;
margin-top:30px;
box-sizing:border-box;

.title{
	font-size:1.5rem;
	font-weight:bold;
	color:black
}

.blog-page-content-container{
	margin-top:10px;
	font-size:1.2rem;
	box-sizing:border-box;
	ol,ul{
		padding:5%;
	}

}

@media only screen and (max-width:480px){
	padding:5% 10px;
	.title{
		font-size:1.1rem;
	}

	.blog-content-container{
		font-size:1rem;
	}

}

}
`