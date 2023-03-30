import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import authFetch from './components/authFetch'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([])


  const fetchDrinks=useCallback(async()=>{

    try {

      setLoading(true);
      const response= await authFetch(`/search.php?s=${searchTerm}`);
      const data=response.data;

    
      if(data.drinks){
        const newCocktails=data.drinks.map((item)=>{

          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;
          return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
        })

        setCocktails(newCocktails)

      }else{  
        setCocktails([]);
      }

      setLoading(false);


    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }

  },[searchTerm])




  useEffect(() => {
    fetchDrinks();
  }, [searchTerm,fetchDrinks]);




  const valueProp={
    loading,
    cocktails,
    setSearchTerm,
  }

  return <AppContext.Provider value={valueProp}>{children}</AppContext.Provider>
}



// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
