import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const{isSubmenuOpen,location,page:{page,links}}=useGlobalContext();
  const [columns, setcolumns] = useState('col-2');
  const container=useRef(null);

  useEffect(() => {

    setcolumns('col-2');

    const subMenuDOM=container.current;
    const {center,bottom}=location;

    subMenuDOM.style.left=`${center}px`;
    subMenuDOM.style.top=`${bottom}px`

    if(links.length===3){
      setcolumns('col-3')
    }
  
    if(links.length>3){
      setcolumns('col-4')
    }
  
    
  }, [location,links]);

  return <aside className={`${isSubmenuOpen?'submenu show':'submenu'}`} ref={container}>

    <h4>{page}</h4>

    <div className={`submenu-center ${columns}`}>

      {links.map((link,index)=>{
        const {label,icon,url}=link;
        return <a href={url} key={index}>{icon}{label}</a>
      })}





    </div>



  </aside>
}

export default Submenu
