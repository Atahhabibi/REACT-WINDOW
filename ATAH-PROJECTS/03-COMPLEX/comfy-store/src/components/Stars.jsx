import styled from "styled-components"
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'

const Stars = ({stars,reviews}) => {

 

  return <Wrapper>


    <div className="stars-container">

    {stars>=1?<BsStarFill/>:stars>=0.5?<BsStarHalf/>:<BsStar/>}
    {stars>=2?<BsStarFill/>:stars>=1.5?<BsStarHalf/>:<BsStar/>}
    {stars>=3?<BsStarFill/>:stars>=2.5?<BsStarHalf/>:<BsStar/>}
    {stars>=4?<BsStarFill/>:stars>=3.5?<BsStarHalf/>:<BsStar/>}
    {stars===5?<BsStarFill/>:stars>=4.5?<BsStarHalf/>:<BsStar/>}


    </div>

    <p className="reviews">({reviews} customer reviews)</p>


  </Wrapper>
}


const Wrapper=styled.div`
margin-top:1rem;
height:2rem;
display: flex;
align-items: center;
column-gap:1rem;

svg{
  color:darkgoldenrod;
  font-size:1.1rem;
}

.reviews{
  font-size:1.1rem;
  color:grey;
}


    

`

export default Stars;