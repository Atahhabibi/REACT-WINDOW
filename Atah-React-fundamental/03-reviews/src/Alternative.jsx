import people from "./data";
import { useState } from "react";
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'


const App = () => {

  
  const [index, setIndex] = useState(0);
  const {name,job,image,text}=people[index]

  const checkNumber=(number)=>{
    if(number>people.length-1){
      return 0;
    }

    if(number<0){
      return people.length-1;
    }

    return number;
  }

  

  const nextPerson=()=>{

    setIndex((currentIndex)=>{
      const newIndex=currentIndex+1;
      return checkNumber(newIndex);
     
    })
    
  }


  const prevPerson=()=>{

    setIndex((currentIndex)=>{
      const newIndex=currentIndex-1;
      return checkNumber(newIndex);
      
    })


  }

  const randomPerson=()=>{
    let value=Math.floor(Math.random()*people.length); 
    
    if(value===index){
      value=index+1;
    }

    setIndex(checkNumber(value))

  }
  

  return <main>

     <article className="review">

       <div className="img-container">
         <img src={image} alt={name} className="person-img" />
         <span className="quote-icon">
          <FaQuoteRight/>
         </span>
       </div>

       <h4 className="author">{name}</h4>
       <p className="job">{job}</p>
       <p className="info">{text}</p>

       <div className="btn-container">
         <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
         <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
       </div>

       <button className="btn btn-hipster" onClick={randomPerson}>suprise</button>




     </article>



  </main>;
};
export default App;
