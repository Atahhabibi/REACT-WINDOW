import MenuItem from "./MenuItem"


const Menu = ({Items}) => {
  return (
    <div className="section-center">
        {Items.map((item)=>{
            return <MenuItem key={item.id} {...item}/>
        })}
    </div>
  )
}
export default Menu