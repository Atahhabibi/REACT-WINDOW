import {useEffect, useRef } from "react"
import styled from "styled-components"
import Sublinks from "./Sublinks"
import {IoCloseCircle} from 'react-icons/all'

const Sidebar = ({sublinks,showSidebar,setShowSidebar,setPageName}) => {


    const overlayDOM=useRef(null);

    useEffect(() => {

        if(showSidebar){
            overlayDOM.current.style.scale='1';
        }else{
            overlayDOM.current.style.scale='0';
        }
        
    }, [showSidebar]);





  return <Wrapper>

      <div className="overlay" ref={overlayDOM}>
          <button className="close-btn" onClick={()=>setShowSidebar(!showSidebar)}><IoCloseCircle/></button>

          <div className="sublinks-container">
            {
             sublinks.map((item,index)=>{
                 return <Sublinks key={index} {...item} setPageName={setPageName}/>
             })
            }
          </div>
      </div>
      
</Wrapper>
  
}

const Wrapper=styled.div`



.overlay{
    position:fixed;
    top: 2%;
    left: 2%;
    width: 96%;
    height: 96%;
    background-color:#f7ebf1;
    padding:1rem 2rem;
    box-shadow:0px 0px 20px black;
    transition: all 0.5s ease;
    scale: 0;
}

.close-btn{
    font-size:3rem;
    transform: translate(70vw);
    background:transparent;
    border: none;
    cursor: pointer;
    color: #561e39;

}

.sublinks-container{
    margin-top:3rem;
}

@media screen and (min-width:500px) {

    .close-btn{
        transform: translate(80vw);
    }

    .sublinks-container{
        margin-left:3rem;
        margin-top:5rem;
    }
    
}


@media screen and (min-width:800px) {

    .overlay{
        scale: 0 !important;
    }


   
    
}

    



`
export default Sidebar