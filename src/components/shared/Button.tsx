import { FC } from 'react'

type ButtonProps = {
	handleClick: () => void
	id: string
	text: string
}
const Button: FC<ButtonProps> = ({ handleClick, id, text }) => {
	return (
		<button id={id} onClick={handleClick}>
			{text}
		</button>
	)
}

export default Button
