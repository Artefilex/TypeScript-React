import { ReactNode } from "react";

type HeadingProps = {
    children: string | ReactNode
}
function Heading({children} : HeadingProps) {
  return <div>{children} </div>;
}

export default Heading;
