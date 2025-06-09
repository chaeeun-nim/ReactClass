interface ButtonProps {
  children : string;
  color?: string;
  textColor?: string;
  type: 'button' | 'reset' | 'submit';
  onClick:(event:React.MouseEvent) => void;
}

function Button({children, type="button", color, textColor, onClick:handleClick}:ButtonProps){
  return(
    <button
      type = {type}
      onClick = { handleClick }
      style={{backgroundColor:color, color :textColor}}
      className = "rounded-button"
    >{ children }</button>
  )
}

export default Button;