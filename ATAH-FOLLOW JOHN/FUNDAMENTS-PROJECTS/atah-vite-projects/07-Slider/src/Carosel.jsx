import { useState,useEffect } from "react"
import { shortList,longList,list } from "./data"
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'


const Carosel = () => {
    const [people, setPeople] = useState(longList);
    const [currentPerson, setCurrentPerson] = useState(0)

    const checkIndex=(number)=>{
        if(number<0){
            return people.length-1;
        }
        
        if(number>people.length-1){
            return 0;
        }

        return number; 
    }

    
    

    const prevSlide=()=>{

        setCurrentPerson((oldPerson)=>{
            return (oldPerson-1 + people.length)% people.length;
        })

       
    }
    const nextSlide=()=>{

        setCurrentPerson((oldPerson)=>{
            return (oldPerson+1)% people.length;
        })
    }

    useEffect(() => {
        
     let sliderID=setInterval(() => {
           nextSlide();
        },2000);


     return ()=>{
         clearInterval(sliderID)
     }
     

    },[currentPerson]);


    





  return (
    <section className="slider-container">

        {
            people.map((person,index)=>{
                const {id,name,image,quote,title}=person;

                return <article className="slide " key={id} style={{transform:`translateX(${100* (index-currentPerson)}%)`,opacity:index===currentPerson?'1':0, visibility:index===currentPerson?'visible':'hidden'}} >
                    <img src={image} alt={name} className="person-img" />
                    <h5 className="name">{name}</h5>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    <FaQuoteRight className="icon"/>
                </article>
            })
    
        }

        <button type="button" className="prev" onClick={prevSlide}><FiChevronLeft/></button>
        <button type="button" className="next" onClick={nextSlide}><FiChevronRight/></button>









    </section>
  )
}
export default Carosel