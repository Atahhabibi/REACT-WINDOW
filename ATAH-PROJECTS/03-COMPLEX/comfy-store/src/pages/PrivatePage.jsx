import { useUserContext } from "../context/userContext"
import { Navigate } from "react-router-dom";
import Loading from "../utils/Loading";


const PrivatePage = ({children}) => {

  const {user,isLoading}=useUserContext();

  if(isLoading){
    return <Loading/>
  }

  if(!user){
   return <Navigate to="/"/>
  }
  
  return <>{children}</>

}

export default PrivatePage