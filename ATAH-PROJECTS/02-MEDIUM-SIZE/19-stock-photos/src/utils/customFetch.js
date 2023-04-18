import axios from "axios";
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

const ACCESS_KEY=import.meta.env.VITE_ACCESS_KEY;
const SECRET_KEY=import.meta.env.VITE_SECRET_KEY;

const customFetch=axios.create({

    baseURL:'https://api.unsplash.com',

    headers:{
        Accept:'application/json',
        Authorization:`Client-ID ${ACCESS_KEY}`,
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
