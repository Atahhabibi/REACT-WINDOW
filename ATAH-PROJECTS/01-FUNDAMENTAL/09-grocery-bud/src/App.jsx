import styled from 'styled-components';
import {useGlobalContext} from './globalContext'
import Form from './Form';
import ItemsContainer from './ItemsContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return <Wrapper>

    <div className="section-center">
      <h2 className='title'>Grocery Bud</h2>
      <Form/>
      <ItemsContainer/>
      <ToastContainer position='top-center' autoClose={2000} />
    </div>


  </Wrapper>
}

const Wrapper=styled.div`

padding-top: 5rem;

.section-center{
  background: var(--primary-200);
  text-align: center;
  border-radius:4px;
  padding: 1rem;

  .title{
    font-size:1.8rem;
    padding: 1rem 0;
  }

}

@media screen and (min-width:600px) {

 .section-center{
   .title{
     font-size:2.5rem;
   }

   max-width:40rem;
 }
    
}



`







export default App
