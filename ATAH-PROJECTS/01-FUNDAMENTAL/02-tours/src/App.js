import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios';
import Error from './Error';
import styled from 'styled-components';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const[tours,setTours]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(false);
  
  const handleTours=(id)=>{
    const newTours=tours.filter((item)=>item.id!==id);
    setTours(newTours);
  }



  const fetchTours=async(url)=>{
    setLoading(true)
    try {

      const response=await axios(url);
      setTours(response.data)
      setLoading(false)
      setError(false)
     
      
    } catch (error) {
      console.log(error.response);
      setLoading(false)
      setError(true)
    }

  }



  useEffect(()=>{
  fetchTours(url);
  },[])


  if(loading){
        return <Wrapper>
    
    <div className='section-center'>
      <Loading/>
    </div>


    </Wrapper>
  }

  if(error){
    return <Wrapper>
    
    <div className='section-center'>

        <div className="heading-title">
          <Error/>
        </div>

    </div>


    </Wrapper>
  }

  if(tours.length<1){
    return <Wrapper>

    
    <div className='section-center'>
        <div className="heading-title">
          <h2>No Tours left</h2>
          <button className='refresh-btn' onClick={()=>fetchTours(url)}>Refresh</button>
        </div>
  
    </div>


    </Wrapper>
    
  }


  return <Wrapper>


    <div className="section-center">

     <div className="heading-title">
       <h2>our tours</h2>
       <div className="underline"></div>
     </div>

     <Tours tours={tours} handleTours={handleTours}/>




    </div>







  </Wrapper>
}


const Wrapper=styled.div`

:root {
  /* colors */
  --primary-100: #d1fae5;
  --primary-200: #a7f3d0;
  --primary-300: #6ee7b7;
  --primary-400: #34d399;
  --primary-500: #10b981;
  --primary-600: #059669;
  --primary-700: #047857;
  --primary-800: #065f46;
  --primary-900: #064e3b;

  /* grey */
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;
  --grey-800: #1e293b;
  --grey-900: #0f172a;
  /* rest of the colors */
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;

  --small-text: 0.875rem;
  --extra-small-text: 0.7em;
  /* rest of the vars */
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 600px;

  /* box shadow*/
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
background: var(--primary-100);

.section-center{
 min-height: 100vh;
 padding:4rem 0;
}

.heading-title{
  text-align: center;
  h2{
    font-size:2rem;
    text-transform: uppercase;
    font-family:'Arial Narrow', Arial, sans-serif;
  }

  .underline{
    margin: 0 auto;
    margin-top:0.3rem;
    border: 2px dotted var(--primary-500);
    margin-bottom:2rem;
    
   
  }

  .refresh-btn{
    padding: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 3px;
    border: none;
    background:var(--primary-500);
    color: white;
    border-radius:4px;
    margin-top:2rem;
  }


}


@media screen and (min-width:600px){

  .heading-title{
    h2{
      font-size:2.5rem;
    }
  }



}




`







export default App
