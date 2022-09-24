import { FC, useState } from 'react'
import Button from '../Button/button.component'
import Icon from '../Icon/icon.component'
import Link from '../Link/link.component'

type ControlsProps = {
	randomize: () => void
	quote: string
}

const Controls: FC<ControlsProps> = ({ randomize, quote }) => {
	const [isOpen, setisOpen] = useState<boolean>(false)
	return (
		<section className='controls'>
			<Button id='new-quote' handleClick={randomize}>
				<Icon symbolId='reload-icon' size='small' />
				<span>New Quote</span>
			</Button>
			<Button id='whatever' handleClick={() => setisOpen((prev) => !prev)}>
				<Icon symbolId='share-icon' size='small' />
				<span>Share</span>
			</Button>
			<ul className={isOpen ? 'active' : undefined}>
				<li>
					<Link ext={true} url='#'>
						<Icon symbolId='facebook-icon' size='small' />
					</Link>
				</li>

				<li>
					<Link ext={true} url='#'>
						<Icon symbolId='instagram-icon' size='small' />
					</Link>
				</li>
				<li>
					<Link
						ext={true}
						url={`https://twitter.com/intent/tweet?text=${quote}&url=https://google.com`}
					>
						<Icon symbolId='twitter-icon' size='small' />
					</Link>
				</li>
				<li>
					<Link ext={true} url='#'>
						<Icon symbolId='whatsapp-icon' size='small' />
					</Link>
				</li>
			</ul>
			<span>Tip: tap the bullet to get new quote.</span>
		</section>
	)
}
export default Controls
