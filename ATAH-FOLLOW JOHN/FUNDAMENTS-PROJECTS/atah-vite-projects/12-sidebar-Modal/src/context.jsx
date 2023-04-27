import { createContext,useState,useContext } from "react";


const AppContext=createContext();

const AppProvider=({children})=>{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar=()=>{
        setIsSidebarOpen(true)
    }

    const closeSidebar=()=>{
        setIsSidebarOpen(false)
    }


    const openModal=()=>{
        setIsModalOpen(true)
    }
    const closeModal=()=>{
       setIsModalOpen(false)
    }

    const value={
        openModal,
        closeModal,
        closeSidebar,
        openSidebar,
        isSidebarOpen,
        isModalOpen,
    }


    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}