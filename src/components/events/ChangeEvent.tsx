import React from "react";

type InputProps = {
    value : number;
    handleChange: (e : React.ChangeEvent<HTMLInputElement> ) => void
}
function ChangeEvent({value ,handleChange} : InputProps ) {
  return <input type="number" value={value} onChange={handleChange} placeholder="input "/>;
}

export default ChangeEvent;
