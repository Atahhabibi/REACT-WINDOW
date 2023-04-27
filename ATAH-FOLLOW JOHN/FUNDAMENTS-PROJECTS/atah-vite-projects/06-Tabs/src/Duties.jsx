import { v4 as makeID} from 'uuid';
import {FaAngleDoubleRight} from 'react-icons/fa'

const Duties = ({duties}) => {
    
  return (
    <div>
        
        {duties.map((duty)=>{

             const id=makeID();
            return <div key={id} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>

            </div>
        })}
        
    </div>
  )
}
export default Duties