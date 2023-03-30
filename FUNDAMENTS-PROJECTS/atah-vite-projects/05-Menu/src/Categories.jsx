const Categories = ({categoryItem,showSpecific}) => {
 
  return<div className="btn-container">
      {
          categoryItem.map((item,index)=>{
             return <button className="btn" key={index} onClick={()=>showSpecific(item)}>{item}</button>
          })
      }
  </div>
 
}
export default Categories