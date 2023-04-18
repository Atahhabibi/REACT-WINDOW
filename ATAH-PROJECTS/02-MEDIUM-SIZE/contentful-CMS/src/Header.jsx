import styled from "styled-components"
import img from './assets/cms2.svg'


const Header = () => {
  return <Wrapper>

    <div className="section-center">

         <div className="info-container">
            <h5 className="cms-title">contentful cms</h5>
            <p className="text">
                Pitchfork schlitz tonx, coloring book celiac tousled succulents ascot affogato cardigan jianbing crucifix seitan. Synth man braid everyday carry try-hard pour-over keffiyeh slow-carb sriracha chillwave banjo gochujang kinfolk small batch mustache.
            </p>
         </div>

         <img src={img} alt="icon" className="header-img"/>

    </div>




  </Wrapper>
}

const Wrapper=styled.div`

background:white;
min-height: 30vh;
padding: 4rem 0;
background-color: var(--primary-300);

img{
    display: none;
}

.cms-title{
    font-size:2.3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom:1rem;
    letter-spacing:3px;
}

.text{
    color:white;
    text-align: justify;
}


@media screen and (min-width:700px){

    .cms-title{
        font-size:3rem;
    }
  
}

@media screen and (min-width:800px){

   padding:3rem;
  .header-img{
    display: block;
    width:20rem;
    background:var(--primary-300);
  }

  .section-center{
    display: grid;
    grid-template-columns:1fr auto;
    align-items: center;
   
  }

  .text{
    padding: 2rem;
  }

  .cms-title{
    font-size:4rem;
  }
}
    
`

export default Header