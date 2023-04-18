import { useState,useEffect } from 'react';
import customFetch from './customFetch';

const useAxios =(url) => {

    const[isLoading,setIsLoading]=useState(true);
    const[isError,setIsError]=useState(false);
    const[data,setData]=useState(null);
    const[fullResponse,setFullResponse]=useState(null);


    const fetchData=async()=>{
       setIsLoading(true);
        
       try {

        const response=await customFetch(url);
        setFullResponse(response)
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

   
   return {isLoading,isError,data,fullResponse};

}

export default useAxios

