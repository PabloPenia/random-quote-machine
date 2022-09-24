import { FC, ReactNode } from 'react'

type ButtonProps = {
	handleClick: () => void
	id: string
	children: string | ReactNode
}
const Button: FC<ButtonProps> = ({ handleClick, id, children }) => {
	return (
		<button id={id} onClick={handleClick}>
			{children}
		</button>
	)
}

export default Button
