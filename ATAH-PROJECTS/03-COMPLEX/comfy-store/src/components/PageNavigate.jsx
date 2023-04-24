import { Link } from "react-router-dom"
import styled from "styled-components"


const PageNavigate = ({title,isProduct=false}) => {
  return <Wrapper>

      <div className="section-center">

       <h5 className="main-nav">
        
        <button className="title-btn"><Link to='/' className="Link">Home</Link></button>
        {isProduct && <button className="title-btn"><Link to='/products' className="Link">/ products</Link></button>}/<span className="prop-name">{title}</span>
        
        </h5>


      </div>


  
    

  </Wrapper>
}

const Wrapper=styled.div`

background:var(--primary-200);
padding:2.5rem 0;


.title-btn{
    font-size:1.6rem;
    border: transparent;
    background:transparent;
    margin-right:0.5rem;
    font-weight: bold;

    .Link{
        color:var(--primary-700);
        font-weight: bold;
    }
}

.main-nav{
    font-size:1.6rem;
    font-weight: bold;
}


.prop-name{
    margin-left:0.5rem;
}

@media screen and (min-width:600px){

    .main-nav{
        font-size:1.8rem;
    }

    .title-btn{
        font-size: 1.8rem;
    }
  
}
@media screen and (min-width:900px){

    padding:3.5rem 0;

    .main-nav{
        font-size:2rem;
    }

    .title-btn{
        font-size:2rem;
    }
  
}




    
`

export default PageNavigate