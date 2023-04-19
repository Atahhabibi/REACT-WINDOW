import axios from "axios";


const customFetch=axios.create({

    baseURL:'https://course-api.com',

    headers:{
        Accept:'application/json',
    },


})



customFetch.interceptors.request.use((request)=>{
    try {
        // console.log('request send successfully');
        return request;

    } catch (error) {
        return Promise.reject('some error')
    }
})

customFetch.interceptors.response.use((response)=>{
    try {
        // console.log('response fetch successfully');
        return response;

    } catch (error) {
        return Promise.reject('some error')
    }
})


export  default customFetch;
