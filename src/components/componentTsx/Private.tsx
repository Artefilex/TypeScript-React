import React from "react";
import {Login} from "./Login";
import { ProfileProps } from "./Profile";
type PrivateProps = {
    isLogin : boolean,
    Component: React.ComponentType<ProfileProps>
}
function Private({isLogin, Component  }: PrivateProps) {
    if(isLogin){
        return <Component name="baris"/>
    }else{
        return <Login/>
    }
  return <div>Private</div>;
}

export default Private;
