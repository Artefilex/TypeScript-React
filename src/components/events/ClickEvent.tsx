type ButtonProps = {
    // handleClick : () => void ; 
    handleClick:  (e : React.MouseEvent<HTMLButtonElement>) => void
}
function ClickEvent({handleClick } : ButtonProps) {
  return <>
  <button onClick={handleClick} >Click</button>

  </>
}

export default ClickEvent;
