const Button = ({ handleClick, id, text }) => {
  return (
    <button id={id} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
