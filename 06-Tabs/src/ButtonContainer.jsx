const ButtonContainer = ({jobs,setCurrentItem,currentItem}) => {

  return (
    <div className="btn-container">

        {jobs.map((item,index)=>{
            const check=currentItem===index;
           return  <button key={item.id} className={check?'active-btn job-btn':'job-btn'} onClick={()=>setCurrentItem(index)}>{item.company}</button>
        })}


    </div>
  )
}
export default ButtonContainer