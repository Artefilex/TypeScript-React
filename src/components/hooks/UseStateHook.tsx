import React, { useEffect, useState } from "react";
export type StateHooks = {
    id: number
    name : string 
    lastname: string
    active: boolean
}

const UseStateHook : React.FC = () => {
    const [ user , setUser] = useState<StateHooks | null>(null)
   useEffect(()=>{
    setTimeout(()=>{
   setUser({
    id: 12,
    name: "baris",
    lastname:"tuncdemir",
    active: false
})
    },1000)
   },[])

  return <div>{user && user.name }
  </div>;
}

export default UseStateHook;
