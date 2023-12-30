import React from "react";
// import {StateHooks} from "../hooks/UseStateHook";
import BasicProps from "../BasicProps";
// export const CustomCompenent = (props: StateHooks) => {
//   return <div>{props.id}</div>;
// };

export const CustomCompenent = (props: React.ComponentProps<typeof BasicProps>) => {
    return <div>{props.id} - {props.address.city} </div>;
  };
