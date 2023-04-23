import styled from "styled-components"
import {GoPlus} from 'react-icons/go'
import {FaMinus} from 'react-icons/fa'

const IncDec = ({handleAmount,itemAmount,id}) => {


  return <Wrapper>

      <div className="btn-container">
        <button className="dec" onClick={()=>handleAmount('dec',id)} ><FaMinus/></button>
        <span className="amount">{itemAmount}</span>
        <button className="inc" onClick={()=>handleAmount('inc',id)}><GoPlus/></button>
      </div>

      

  </Wrapper>
}


const Wrapper=styled.div`
width: fit-content;
text-align: center;

.btn-container button{
    margin-bottom:1rem;
    font-size:1.5rem;
    border: transparent;
    background:transparent;
    cursor: pointer;

}

.btn-container .amount{
    font-size:2rem;
    margin: 0 1.5rem;
    font-weight: bold;
}

.add-to-cart-btn{
    margin-bottom:2rem;

}
  

@media screen and (min-width:600px) {

    .btn-container button{
        font-size:1.6rem;
    }

    .btn-container .amount{
        font-size:2.3rem;
    }

    .btn-primary{
        font-size:1.4rem;
    }
    
}


`

export default IncDec;