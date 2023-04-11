import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styled from 'styled-components';

const Review = ({reviews}) => {

  const[index,setIndex]=useState(0);
  const[person,setPerson]=useState(reviews[index]);

  const {image,name,job,text}=person;


  const nextPerson=()=>{
    
    setIndex((oldIndex)=>{
      let newIndex=(oldIndex+1)%reviews.length;
      return newIndex;

    })

    setPerson(reviews[index])
  }

  const prevPerson=()=>{
    
    setIndex((oldIndex)=>{
      let newIndex=(oldIndex-1 + reviews.length)%reviews.length;
      return newIndex;

    })

    setPerson(reviews[index])
  }


  const randomPerson=()=>{
    let randNum=Math.floor(Math.random()*reviews.length);

    if(randNum===index){
     randNum=Math.floor(Math.random()*reviews.length);
    }

    setIndex(randNum)
    setPerson(reviews[index])


  }




  return <Wrapper>

    <div className="section-center">

      <article className="review">

        <div className="image-container">
          <img src={image} alt={name} className='img'/>
          <div className="quote"><FaQuoteRight/></div>
        </div>

       <div className="info-container">
          <h5 className='name'>{name}</h5>
          <p className='job'>{job}</p>
          <p className="info">{text}</p>
       </div>

       <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
        <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
       </div>

       <button className="suprise-btn" onClick={randomPerson}>suprise me</button>


      </article>



    </div>



  </Wrapper>;
};



const Wrapper=styled.section`

min-height: 100vh;
background:var(--primary-900);
display: grid;
place-items: center;

.section-center{
  background:var(--primary-100);
  padding:3rem 1rem;
  border-radius:5px;
  &:hover{
    box-shadow:var(--shadow-4);
    box-shadow: 0px 0px 2px var(--primary-100);
  }

  @media screen and (min-width:600px){

    .info-container{

      .info{
        font-size:1.1rem;
      }
    }

    

    max-width:50rem;

    .image-container{
      min-height:10rem;
      min-width: 10rem;
    }

    .btn-container{
      margin-top:-2rem;
    }

    
  }



}


.review{

  text-align: center;



  .image-container{
    border-radius: 50%;
    height:8rem;
    width:8rem;
    margin: 0 auto;
    position: relative;
    z-index:2;
  }

  .image-container::before{
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    background:var(--primary-500);
    left:5%;
    top:-4%;
    border-radius: 50%;
    z-index:-1;

  }

  .info-container{
    min-height:15rem;

  }

  .quote{

    background:var(--primary-500);
    width:2.5rem;
    height:2.5rem;
    color: white;
    border-radius:50%;
    display: grid;
    place-items:center;
    position: absolute;
    top: 0;
    left:-8%;
  
   

  }




  .img{
    height: 100%;
    border-radius: 50%;
  }

  .name{
    margin-top:1rem;
    font-size:1.7rem;
    letter-spacing: 2px;

  }

  .job{
    text-transform: uppercase;
    font-size:0.9rem;
    color:var(--primary-500);
    font-weight: 500;
    
  }

  .info{
    color:var(--grey-600);
    font-size:0.9rem;
    margin:1rem 0;
    
  }

  .btn-container{
    button{
      margin: 0 1.3rem;
      margin-bottom:1rem;
      border: transparent;
      background: transparent;
      color: var(--primary-500);
      font-size:1.4rem;
      cursor: pointer;
      
    }
  }

  .suprise-btn{
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    background:var(--primary-200);
    border: transparent;
    color: var(--primary-500);
    letter-spacing:2px;
    border-radius:5px;
    font-weight: bold;
    cursor: pointer;
    transition:var(--transition);

    &:hover{
      background:var(--primary-600);
      color: white;
    }

  }
  


}









`














export default Review;
