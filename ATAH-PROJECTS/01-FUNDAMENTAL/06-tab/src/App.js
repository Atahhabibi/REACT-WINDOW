import React from 'react';
import { useState,useEffect } from 'react';
import useAxios from './utils/useAxios';
import styled from 'styled-components';
import Loading from './utils/Loading';
import Error from './utils/Error';
import Companies from './Companies';
import Duties from './Duties';
const url = 'https://course-api.com/react-tabs-project'


function App() {

  const {isLoading,isError,data}=useAxios(url);
  const[job,setJob]=useState(null);

  const[activeBTN,setActiveBTN]=useState();

   const handle=(item)=>{
    setActiveBTN(item)
    const newJob=data.find((singleItem)=>singleItem.company===item)
    setJob(newJob)
    
    
  }



  useEffect(() => {

    if(data!==null){
      setActiveBTN(data[0].company)
    }
     // eslint-disable-next-line
  }, [data])
 
  

  if(isLoading){
    return <Loading/>
    
  }
  if(isError){
    return <Error/>

  }

 

  const companies=[...new Set(data.map((item)=>item.company))];

  const {title,dates,duties,company}=job || data[0];


  return <Wrapper>


    <div className="section-center">

    <Companies  companies={companies} activeBTN={activeBTN} handle={handle} />

     <div className="info-container">

      <h5 className='job-title'>{title}</h5>
      <h5 className='company'>{company}</h5>
      <h5 className="date">{dates}</h5>

      <Duties duties={duties}/>


     </div>



    </div>
    



  </Wrapper>;
}



const Wrapper=styled.section`



font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

margin:4rem 2rem;

.info-container{
  margin-top:4rem;

  .job-title{
    font-weight:600;
    font-size:1.5rem;
  }

  .company{
    background: var(--primary-200);
    width: fit-content;
    padding: 0.2rem 1rem;
    font-size:1rem;
    margin-top: 0.5rem;
  }

  .date{
    font-size:1rem;
    color:var(--grey-600);
    margin-top:0.5rem;
  }


  @media screen and (min-width:600px){

    .job-title{
      font-size:2rem;
    }

    .date{
      font-size:1.2rem;
    }
    
    
  }







}


  @media screen and (min-width:900px){

    .section-center{
      display: grid;
      grid-template-columns:auto 1fr;
    }

    

   
    
  }




`




export default App;
