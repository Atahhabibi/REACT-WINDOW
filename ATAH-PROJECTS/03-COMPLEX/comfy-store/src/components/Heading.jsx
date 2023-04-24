import styled from "styled-components"


const Heading = ({title}) => {
  return <Wrapper>

    <div>
        <h2 className="heading-title">{title}</h2>
        <div className="underline"></div>
    </div>

  </Wrapper>
}

const Wrapper=styled.div`

margin-bottom:2rem;

.heading-title{
    font-size:2rem;
    font-weight: bold;
    text-align: center;
}

.underline{
    width:30%;
    height:0.2rem;
    margin: 0 auto;
    background:var(--primary-600);
    margin-top:0.3rem;
}

@media screen and (min-width:800px){

    .heading-title{
        font-size:3rem;
    }
  
}
`

export default Heading