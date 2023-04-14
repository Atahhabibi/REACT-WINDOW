import React, { useState } from 'react';
import styled from 'styled-components';
import data from './data';
import { nanoid } from 'nanoid';


function App() {
  const [parargraph, setParargraph] = useState([]);
  const [value, setValue] = useState(1);


  const handleSubmit=(e)=>{
    e.preventDefault();

    console.log(value);

    if(value>data.length){
      setValue(data.length)
    }

    setParargraph(data.slice(0,value));

  }

 


  return <Wrapper>

    <div className="section-center">

      <h4 className='title'>Tired of boring lorem ipsum?</h4>

      <form onSubmit={handleSubmit}>

        <div className="form-control">

          <label htmlFor="paragraph" >paragraph:</label>
          <input type="number" name="number" id="paragraph" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} max={data.length} min={1}/>
          <button type="submit">Generate</button>

        </div>

        <div className="result">
          {
            parargraph.map((item)=>{
              return <p key={nanoid()}>{item}</p>
            })
          }
        </div>


      </form>

    </div>



  </Wrapper>
  
  
}


const Wrapper=styled.div`
:root {
    /* colors */
    --primary-100: #fef3c7;
    --primary-200: #fde68a;
    --primary-300: #fcd34d;
    --primary-400: #fbbf24;
    --primary-500: #f59e0b;
    --primary-600: #d97706;
    --primary-700: #b45309;
    --primary-800: #92400e;
    --primary-900: #78350f;

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

.section-center{
  padding:2rem;

  .title{
    font-size:1.1rem;
    font-weight: bold;
    margin:1rem 0;
    text-transform:uppercase;
    text-align: center;
  }

  .form-control{
    text-align: center;
    margin-bottom:1rem;
  }

  label,input,button{
    font-size:1.2rem;
    text-transform: capitalize;
    margin: 0 0.2rem;
    padding:0.5rem 0.5rem;
    border-radius:5px;
    border: none;
  }

  button{
    background: green;
    color: white;
  }

  input{
    background:var(--grey-300);
  }

  .result{

    margin-top:2rem;

    p{
      margin-bottom:2rem;
      text-align: justify;
      color:var(--grey-600);
    }
    
  }




}

@media screen and (min-width:600px) {

  .section-center{

    padding:3rem;
    padding-top:4rem;

    .title{
      font-size:1.8rem;
    }

    label{
      font-size:1.5rem;
    }

    .result p{
      font-size:1.1rem;
    }
    



  }
}






`








export default App;
