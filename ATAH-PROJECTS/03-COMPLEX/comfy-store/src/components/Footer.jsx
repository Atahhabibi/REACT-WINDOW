import styled from "styled-components"


const Footer = () => {
  return <Wrapper>

    <div className="section-center">
      <h5 className="footer-info">&copy; {new Date().getFullYear()}<span className="name"> comfy-sloth </span> All rights reserved </h5>
    </div>


  </Wrapper>
}

const Wrapper=styled.div`

background-color:var(--primary-900);
color: white;

.section-center{
  padding:2rem 1rem;
  display: grid;
  place-items: center;
}

.footer-info{
  font-size:0.8rem;

  .name{
    color: var(--primary-500);
  }
}



@media screen and (min-width:600px){

  .footer-info{
    font-size:1.5rem;
  }
  
}


    
`

export default Footer