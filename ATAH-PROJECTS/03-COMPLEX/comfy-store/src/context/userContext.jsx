import { createContext, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";



const UserContextAPI=createContext();



const UserContextProvider=({children})=>{

    const{loginWithRedirect,isLoading,isError,user,logout}=useAuth0();

    const contextValue={
        loginWithRedirect,
        isLoading,
        isError,
        user,
        logout,
    }


    return <UserContextAPI.Provider value={contextValue}>{children}</UserContextAPI.Provider>
}


const useUserContext=()=>{
    return useContext(UserContextAPI);
}


export{UserContextProvider,useUserContext};