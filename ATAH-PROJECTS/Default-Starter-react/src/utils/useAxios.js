import axios from 'axios';
import { useState,useEffect } from 'react';

const useAxios =(url) => {

    const[isLoading,setIsLoading]=useState(true);
    const[isError,setIsError]=useState(false);
    const[data,setData]=useState(null);


    const fetchData=async()=>{
       setIsLoading(true);
        
       try {

        const response=await axios(url);
        setIsLoading(false)
        setData(response.data);
        setIsError(false)
        
       } catch (error) {
        console.log(error.response);
        setIsError(true)
        setIsLoading(false)
        
       }
    }


    useEffect(()=>{
        fetchData(url)
    },[url])

   
   return {isLoading,isError,data};

}

export default useAxios

