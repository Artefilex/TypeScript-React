import {useContext} from "react";
import { UsersContext } from "./UserContext";
function User() {
   const userContext = useContext(UsersContext)

   const handleLogin = () =>{ 
    if(userContext){
        userContext.setUser({
        name: "baris",
        email:"baris.tncdmr@gmail.com"
      })
    }
   }  
   const handleLogout = () =>{
    if(userContext){
        userContext.setUser(null)
      }
   }  
  return <div>
      user {userContext?.user?.name}
    <button onClick={handleLogin}> login</button>
    <button onClick={handleLogout}> logout</button>
  </div>;
}

export default User;
