


const SingleItem = ({item,removeItem,setCompletedItem}) => {

    const {id,name,completed}=item;
   

  return <div className="single-item">


      <input type="checkbox" checked={completed}  onChange={()=>setCompletedItem(id)}/>
      <p style={{textDecoration:completed && "line-through",textTransform:'capitalize'}}>{name}</p>
      <button className="btn remove-btn" type="button" onClick={()=>removeItem(id)}>delete</button>



  </div>
  
}
export default SingleItem