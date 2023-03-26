
import { FaTimes} from "react-icons/fa"
import logo from '../src/logo.svg'
import { links ,social } from "./Data"
import { useGlobalContext } from "./context"



const Sidebar = () => {

    const {isSidebarOpen,closeSidebar}=useGlobalContext();

  return (
    <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'}`}>

        <div className="sidebar-header">
            <img src={logo} alt="coding" className="logo" />
            <button className="close-btn" onClick={closeSidebar}><FaTimes/></button>
        </div>

        <ul className="links">
            {
                links.map((link)=>{
                    const {id,url,text,icon}=link;
                    return <li key={id}><a href={url}>{icon}{text}</a></li>

                })
            }

         
        </ul>

        <ul className="social-icons">
            {
                social.map((link)=>{
                    const {id,url,icon,text}=link;
                    return <li key={id}><a href={url}>{icon}{text}</a></li>


                })
            }

        </ul>



    </aside>
  )
}
export default Sidebar