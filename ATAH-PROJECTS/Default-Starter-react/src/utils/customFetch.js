import axios from "axios";


const customFetch=axios.create({

    headers:{
        Accept:'application/json',
    }
})