import styled from "styled-components"
import {AiFillCloseCircle } from 'react-icons/ai';
import {links,social} from './data'
import { FaBars } from "react-icons/fa";
import { useRef,useEffect,useState } from "react";


function App() {


   const sidebarDOM=useRef(null);
   const closeBtnDOM=useRef(null);
   const showBtnDOM=useRef(null);
   const modalOverlyContainer=useRef(null);
   const modalContent=useRef(null);


   const [ShowSidebar, setShowSidebar] = useState(false);
   const [showModal, setShowModal] = useState(false);

  
   useEffect(() => {

    if(ShowSidebar){
      sidebarDOM.current.style.transform='translate(0)';
    }else{
      sidebarDOM.current.style.transform='translate(-100%)';
    }
     
   }, [ShowSidebar]);


   useEffect(() => {

    if(showModal){
      modalOverlyContainer.current.style.visibility='visible';
      modalContent.current.style.visibility='visible';
    }else{
      modalOverlyContainer.current.style.visibility='hidden';
      modalContent.current.style.visibility='hidden';
    }
   }, [showModal])




  return <Wrapper>

    
    <button className="fabars"  onClick={()=>{setShowSidebar(!ShowSidebar)}}><FaBars/></button>

    <div className="modal-container">

      <div className="modal-overlay-container" ref={modalOverlyContainer}></div>

      <button className="show-modal-btn" ref={showBtnDOM} onClick={()=>{setShowModal(!showModal)}}>show modal</button>

      <div className="modal-content" ref={modalContent}>
          <button className="content-btn-close" onClick={()=>setShowModal(!showModal)}><AiFillCloseCircle/></button>
          <h3>Modal content</h3>
      </div>

    </div>

    <div className="sidebar" ref={sidebarDOM}>

      <div className="header">
        <h4 className="logo">coding<span> Addict</span></h4>
        <button className="toggle-btn" ref={closeBtnDOM} onClick={()=>setShowSidebar(!ShowSidebar)}><AiFillCloseCircle/></button>
      </div>

      <ul className="links">
        {
          links.map((item)=>{
            const {text,url,id,icon}=item;
            return <li key={id} className="link"><a href={url}><span className="icon">{icon}</span><span className="text">{text}</span></a></li>
          })
        }
      </ul>

      <ul className="socials">

        <div className="socials-container">
        {
          social.map((item)=>{
            const {url,id,icon}=item;
            return <li key={id} className="social"><a href={url}>{icon}</a></li>
          })
        }
        </div>

      </ul>


      

    </div>


  </Wrapper>
}

const Wrapper=styled.div`

padding:2rem;
position: relative;

.fabars{
  color: white;
  font-size:2.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  animation: move 2s infinite;

  @keyframes move {

    0%{
      scale:1;
      
    }
    50%{
      scale:1.3;
    }
    100%{
      scale:1;
    }
    
  }


}


.sidebar{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background:white;
  transform: translate(-100%);
  display: grid;
  grid-template-rows:auto 1fr auto;
  transition:var(--transition);
}

.header{
  display:flex;
  justify-content: space-between;
  margin-bottom:2rem;
  padding: 1rem;
}

.logo{
  font-size:2rem;
  span{
    color:#2f9774;
  }
}

.toggle-btn{
  font-size:2.3rem;
  border: transparent;
  background:transparent;
  cursor: pointer;
}

.links{
  font-size:2rem;
  text-transform: capitalize;

}
.link a{
  color:#103227;
  display: flex;
  align-items: center;
  transition:all 0.6s ease-in-out;

  &:hover{
    background-color: #aedccd;
  }
}

.icon{
  margin-right:1rem;
  margin-left:1rem;
}

.socials{
  display: grid;
  place-items: center;

}

.socials-container{
  display: flex;
  margin-bottom:2rem;
}

.social{
  font-size:2rem;
  margin: 0 0.6rem;
  
  a{
    color: #2f9774;
    transition: all 0.5s ease;
  }
  
  a:hover{
    color: #103227;
  }

}

.modal-container{
  display: grid;
  place-items: center;
  height:80vh;
}

.show-modal-btn{
  padding:1.1rem;
  text-transform: capitalize;
  font-size: 1.1rem;
  border-radius:8px;
  background:#d6eee6;
  cursor: pointer;
  letter-spacing:2px;
}


.modal-overlay-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background:#d6eee6;
  opacity:0.8;
  display: grid;
  place-items: center;
  visibility: hidden;

}

.modal-content{
  background-color:#2a8667;
  position: absolute;
  padding:1rem;
  width:20rem;
  height:15rem;
  text-align: center;
  box-shadow:var(--shadow-3);
  border-radius: 5px;
  color: white;
  visibility: hidden;

  h3{
    margin-top:3rem;
    letter-spacing:3px;
  }

  button{
    transform: translate(7rem);
    font-size:2rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  
}


@media screen and (min-width:600px) {

  .modal-content{
    width: 40rem;

    button{
      transform: translate(17rem);
      font-size:2.8rem;
    }

    h3{
      margin-top:2rem;
    }
  }
    
}




@media screen and (min-width:800px) {

  .sidebar{
    width:40%;
    max-width:30rem;
  }


}








  


`

export default App
