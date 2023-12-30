import React, { createContext, useState } from "react"

export type AuthUser = {
    name: string,
    email:string
}
type UserContextType = {
    user : AuthUser | null ,
    setUser:  React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserContextProviderProps = {
    children: React.ReactNode
}
export const UsersContext = createContext<UserContextType | null>({} as UserContextType)

export const UserProivder = ({children} : UserContextProviderProps, ) =>{
   const [user, setUser] = useState<AuthUser | null>(null)
   return <UsersContext.Provider value={{user,setUser}}>
     {children}
   </UsersContext.Provider>
}
