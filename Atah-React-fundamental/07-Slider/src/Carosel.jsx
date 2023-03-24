import { useState } from "react"
import { shortList,longList,list } from "./data"
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

const Carosel = () => {
    const [people, setPeople] = useState(longList);
    const [currentPerson, setCurrentPerson] = useState(0)

    const prevSlide=()=>{

   
    

        
    }
    const nextSlide=()=>{

    }




  return (
    <section className="slider-container">

        {
            people.map((person,index)=>{
                const {id,name,image,quote,title}=person;

                return <article className="slide " key={id} style={{transform:`translateX(${100* (index-currentPerson)}%)`}} >
                    <img src={image} alt={name} className="person-img" />
                    <h5 className="name">{name}</h5>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    <FaQuoteRight className="icon"/>
                </article>
            })
    
        }

        <button type="button" className="prev" onClick={prevSlide}><FiChevronLeft/></button>
        <button type="button" className="next" onClick={prevSlide}><FiChevronRight/></button>









    </section>
  )
}
export default Carosel