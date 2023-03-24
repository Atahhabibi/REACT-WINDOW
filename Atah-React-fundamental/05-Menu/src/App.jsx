import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";




let newCategory= ['all',...new Set(menu.map((item)=>item.category))];



const App = () => {

  const [menuItems, setMenuItems] = useState(menu);
  const [categoryItem, setCategoryItem] = useState(newCategory);
  const [filterMenu, setFilterMenuItem] = useState(menu);

  

  const showSpecific=(category)=>{
    let specificItems=filterMenu.filter((item)=>item.category===category);

    if(category==='all'){
      setMenuItems(menu);
      return;
    }
    setMenuItems(specificItems);
  }




  

  return <main>

    <section className="menu">

      <Title text={'our menu'}/>
      <Categories categoryItem={categoryItem} showSpecific={showSpecific}/>
      <Menu Items={menuItems}/>


    </section>

  </main>;
};
export default App;
