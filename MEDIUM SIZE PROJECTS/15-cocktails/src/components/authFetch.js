import axios from "axios";

const authFetch=axios.create({
    baseURL:'https://www.thecocktaildb.com/api/json/v1/1',
    headers:{
        Accept:'application/json',
    }
})




authFetch.interceptors.request.use((request)=>{
    
    return request;

},(error)=>{
    return Promise.reject(error)
})


authFetch.interceptors.response.use((response)=>{

    return response;
     
},(error)=>{
    return Promise.reject(error)
})






export default authFetch;