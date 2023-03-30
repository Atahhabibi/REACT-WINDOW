import React, { useState, useContext } from 'react'
import { createContext } from 'react'
import sublinks from './data'


const AppContext=createContext();

const AppProvider=({children})=>{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({})
    const [page,setPage]=useState({page:'',links:[]});
    

    const openSidebar=()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar=()=>{
        setIsSidebarOpen(false)
    }

    const openSubmenu=(text,coordinates)=>{

        setLocation(coordinates);
        setIsSubmenuOpen(true)

        const page=sublinks.find((link)=>link.page===text);
        setPage(page);

    }

    const closeSubmenu=()=>{
        setIsSubmenuOpen(false)
    }

    
    const valueProp={
        isSidebarOpen,
        isSubmenuOpen,
        openSubmenu,
        openSidebar,
        closeSidebar,
        closeSubmenu,
        location,
        page,

    }

    return <AppContext.Provider value={valueProp}>{children}</AppContext.Provider>
}


const useGlobalContext=()=>{
    return useContext(AppContext)
}


export {useGlobalContext,AppProvider,AppContext}