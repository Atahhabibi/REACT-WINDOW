import axios from 'axios';
import { useEffect } from 'react';
import authFetch from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {

    try {

      const resp1=await authFetch('/react-store-products');
      const resp2=await axios(randomUserUrl)
      console.log(resp1.data);
      
    } catch (error) {
      console.log(error.response);
      
    }
    



  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
