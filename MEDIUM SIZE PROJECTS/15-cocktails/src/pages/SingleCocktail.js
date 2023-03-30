import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import authFetch from '../components/authFetch'
import { useState,useEffect } from 'react'
const url = '/lookup.php?i='

const SingleCocktail = () => {

  const {id}=useParams();
  const [loading, setLoading] = useState(true)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    
    setLoading(true);

    async function getCocktail(){
      try {

        const response= await authFetch(`${url}${id}`);
        const drink=response.data.drinks;
     


        if(drink){

          const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,strGlass:glass,
           strInstructions:instruction,

            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          
          }=drink[0];


          const  ingredients=[

            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,

          ]

          const newCocktail={
            name,image,info,category,glass,instruction,ingredients
          }

          setCocktail(newCocktail)
          setLoading(false);



        }else{
          setCocktail(null)
        }
        

        
      } catch (error) {
        console.log(error);
        setLoading(false)
        
      }
    }

    getCocktail();


  },[id]);



  if(loading){
    return  <Loading/>
  }

  if(!cocktail){
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  

  const {name,image,info,category,glass,instruction,ingredients}=cocktail;

  
  return <section className='section cocktail-section'>

    <Link to="/" className='btn btn-primary'>back home</Link>

    <h2 className="section-title">{name}</h2>

    <div className="drink">

      <img src={image} alt={name} />

      <div className="drink-info">
         <p><span className='drink-data'>name :</span> {name}</p>
         <p><span className='drink-data'>category </span> :{category}</p>
         <p><span className='drink-data'>info:</span> {info}</p>
         <p><span className='drink-data'>glass :</span>{glass} </p>
         <p><span className='drink-data'>instructions:</span>{instruction} </p>
         <p><span className='drink-data'>Ingredients:</span>{

           ingredients.map((item,index)=>item?<span style={{textDecoration:'underline'}} key={index}>{item}</span>:null)


         } </p>
         
      </div>



    </div>




  </section>
  
}

export default SingleCocktail
