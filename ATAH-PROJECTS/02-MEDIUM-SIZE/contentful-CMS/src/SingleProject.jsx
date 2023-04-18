import styled from "styled-components"


const SingleProjects = ({img,name}) => {

  return <Wrapper>

    <img src={img} alt={name} className="img" />
    <h5 className="single-title">{name}</h5>

        


  </Wrapper>
}

const Wrapper=styled.article`

min-height:15rem;
border:3px solid white;
margin-bottom:1rem;


img{
    max-height:12rem;
    min-height:13rem;
}


margin-bottom:2rem;
cursor: pointer;
box-shadow:0px 0px 10px var(--grey-500);
transition: var(--transition);

.single-title{
    padding: 1rem;
    font-size:1.1rem;
    font-weight: bold;
    background:white;
    color: var(--primary-900);
    text-align: center;
    background:#d87396;

}

@media screen and (min-width:600px){

    &:hover{
        scale: 1.1;
    }


    margin-bottom:0;
  
}






`

export default SingleProjects