import { useContext,createContext, useState,useEffect } from "react";
import useAxios from "./utils/useAxios";
const mainUrl = `/photos`
const searchUrl = `/search/photos?page=1&query=`

const AppContext=createContext();


const AppProvider=({children})=>{

    const[searchTerm,setSearchTerm]=useState('');
    const[theme,setTheme]=useState(false);
    const[query,setQuery]=useState('cat');


   const {data,isLoading,isError}=useAxios(`${searchUrl}${query}`);

   const handleSubmit=(e)=>{
     e.preventDefault();

     let value=e.target.firstElementChild.value;
     setQuery(value)


   }


    const contextValue={
        data:data?.results,
        isLoading,
        isError,
        theme,
        setTheme,
        searchTerm,
        handleSubmit,
        setSearchTerm
    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

}


const useAppContext=()=>{
    return useContext(AppContext);

}


export{AppProvider,useAppContext}