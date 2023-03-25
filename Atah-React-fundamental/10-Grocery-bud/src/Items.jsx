import SingleItem from "./SingleItem"

const Items = ({items,removeItem,setCompletedItem}) => {



  return (
    <div className="items">
        {
            items.map((item)=>{
                return<SingleItem key={item.id} item={item} removeItem={removeItem} setCompletedItem={setCompletedItem}/>
            })
        }
    </div>
  )
}
export default Items