import { Link } from "react-router-dom"
import styled from "styled-components"
import errorImage from "../utils/images/page-not-found.svg"


const ErrorPage = () => {
  return <Wrapper>


 
   <div className="error-container">
     <button className="btn-primary"><Link to='/' className="Link-btn">Back Home</Link></button>
     <img src={errorImage} alt="error" className='img' />
      <h2 className='error-title'>There was an Error...</h2>
   </div>



</Wrapper>
}



const Wrapper=styled.div`
min-height:calc(100vh - 143px);
display: grid;
place-items: center;

text-align: center;


.img{
 margin: 0 auto;
}

h2{
 display: inline;
 font-size:1rem;
 font-weight: bold;
 font-size:1.4rem;
 letter-spacing:2px;

}

@media screen and (min-width:800px) {

  min-height:calc(100vh - 174px);

  .img{
    width:40rem;
  }
    
}




`

export default ErrorPage