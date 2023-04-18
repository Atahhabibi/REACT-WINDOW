import styled from "styled-components"
import { useAppContext } from "./appContext"


const Form = () => {

    const {theme,handleSubmit,setSearchTerm,searchTerm,data}=useAppContext();

  
  return <Wrapper>

        <h5 className="title" style={theme?{color:"var(--grey-200)"}:{color:'var(--primary-900)'}}>Search Images</h5>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="cat" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button type="submit">search</button>
            
        </form>


  </Wrapper>

  
 


}

const Wrapper=styled.div`


text-align: center;
padding:1rem;

.title{
    text-transform: capitalize;
    color:var(--primary-900);
    font-weight: bold;
    letter-spacing:3px;
    font-size:2rem;
}


form{
    display: grid;
    grid-template-columns:1fr auto;
    max-width:30rem;
    margin: 0 auto;
}


input,button{
    padding:0.5rem 1rem;
    border-radius:5px;
    border: transparent;
    margin-top:1rem;
    margin-bottom:1rem;
   
}

button{
    background:var(--primary-900);
    color:var(--primary-100);
    cursor: pointer;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
    letter-spacing:2px;

}

input{
     border-top-right-radius:0;
     border-bottom-right-radius:0;

     &::placeholder{
        font-size:1rem;
        letter-spacing:2px;
     }
}


@media screen and (min-width:800px){

    input,button{
        padding:0.8rem 1rem ;
    }
  
}


`

export default Form