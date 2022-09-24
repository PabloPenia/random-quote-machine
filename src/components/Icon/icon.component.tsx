import './icon.styles.scss'
import Sprite from '~/assets/sprite.svg'
import { FC } from 'react'

type IconProps = {
	symbolId: string
	size?: 'smaller' | 'small' | 'big' | 'bigger'
}
const Icon: FC<IconProps> = ({ symbolId, size }) => {
	return (
		<span className={`icon${typeof size === 'string' ? ` ${size}` : ''}`}>
			<svg>
				<use xlinkHref={`${Sprite}#${symbolId}`}></use>
			</svg>
		</span>
	)
}

export default Icon
