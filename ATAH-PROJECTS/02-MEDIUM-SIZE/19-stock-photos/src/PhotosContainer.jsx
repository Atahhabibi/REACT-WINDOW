import styled from "styled-components"
import Form from "./Form";
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs'
import { useAppContext } from "./appContext";


const PhotosContainer = () => {

    const {data,theme,setTheme}=useAppContext();


    let newphotos=data.map((item)=>{
        const {urls:{regular},alt_description:info}=item;
        return {regular,info};
    })

  return <Wrapper>

    <button  onClick={()=>{setTheme(!theme)}} className="night-btn" style={theme?{color:"var(--grey-200)"}:{color:'var(--primary-900)'}} >

        <span className="theme-name">theme</span><span className="night-mode">{theme?<BsFillSunFill/>:<BsFillMoonFill/>}</span>
        
    </button>

    <Form/>
    
    {data.length<1?<div className="empty-results" style={theme?{color:'white'}:{color:'black'}}><h3>no results found</h3></div>:

      <div className="container">

        {
            newphotos.map((item,index)=>{

                const {regular:url,info}=item;

                return <article key={index} className="single-img">

                    <img src={url} alt={info} className="img" />

                </article>
            })
    
        }


    </div>

    
    
    
    
    }
    

  

  </Wrapper>



}

const Wrapper=styled.div`

padding-top:1rem;

.night-btn{
    display: flex;
    align-items: center;
    text-transform: capitalize;
    background:transparent;
    border: none;
    transform: translate(70vw);
}


.theme-name{
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
}



.night-mode{
    font-size:1.2rem;
    border: none;
    background:transparent;
    cursor: pointer;
    margin-left:0.5rem;

}

.empty-results{
    text-align: center;
    letter-spacing: 4px;
    font-weight: bold;
}


.img{
    height:100%;
}

.single-img{
    height:12rem ;
    margin-bottom:2rem;
    border-radius:5px;
    overflow: hidden;
    border:4px solid var(--primary-700);
    outline:4px solid white;
}



@media screen and (min-width:600px){


    .container{
        display: grid;
        grid-template-columns:1fr 1fr;
        gap:1.5rem;
    }

    .single-img{
        margin-bottom:0;
    }

}

@media screen and (min-width:800px){

    .container{
        grid-template-columns:1fr 1fr 1fr;
    }
  
}
    
`

export default PhotosContainer;

