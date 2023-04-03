import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {

  const { user,isAuthenticated,loginWithRedirect,logout,isLoading} = useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {

    if(isAuthenticated){
      setMyUser(user)
    }else{
      setMyUser(null)
    }
  
  }, [isAuthenticated]);

  const valueProp={
    loginWithRedirect,
    logout,
    myUser,
  }

  return (
    <UserContext.Provider value={valueProp}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
