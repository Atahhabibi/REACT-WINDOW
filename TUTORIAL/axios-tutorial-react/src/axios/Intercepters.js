import axios from "axios";

const authFetch=axios.create({
    baseURL:'https://course-api.com',
  
})

authFetch.interceptors.request.use((request)=>{

    request.headers.common['Accept']='application/json';
    console.log('request sent atah--');
    return request;

},(error)=>{
    console.log('there was an error sending the request');
    return Promise.reject(error)

})




authFetch.interceptors.response.use((response)=>{
    console.log('congratualion got response');
    return response;


},(error)=>{

    if(error.response.status===404){
        console.log('NOT FOUND ATAH----');
    }

    return Promise.reject(error)


})










export default authFetch;