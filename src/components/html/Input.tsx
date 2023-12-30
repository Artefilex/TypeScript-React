import React from "react";

type InputProps = React.ComponentProps<"input">
export function CustomInput(props: InputProps) {
  return <input {...props} />;
}


