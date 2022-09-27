import { FC, useState } from 'react'
import { Button } from '../common/button.component'
import Icon from '../Icon/icon.component'
import Link from '../Link/link.component'

type ControlsProps = {
	randomize: () => void
	quote: string
}

const Controls: FC<ControlsProps> = ({ randomize, quote }) => {
	const [isOpen, setisOpen] = useState<boolean>(false)
	const url = window.location.href
	return (
		<section className='controls'>
			<Button handleClick={randomize}>
				<Icon symbolId='reload-icon' size='small' />
				<span>New Quote</span>
			</Button>
			<Button handleClick={() => setisOpen((prev) => !prev)}>
				<Icon symbolId='share-icon' size='small' />
				<span>Share</span>
			</Button>
			<ul className={isOpen ? 'active' : undefined}>
				<li>
					<Link
						ext={true}
						url={`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`}
					>
						<Icon symbolId='facebook-icon' size='small' />
					</Link>
				</li>
				<li>
					<Link
						ext={true}
						url={`https://twitter.com/intent/tweet?text=${quote}&url=${url}`}
					>
						<Icon symbolId='twitter-icon' size='small' />
					</Link>
				</li>
				<li>
					<Link ext={true} url={`https://wa.me/?text=${quote} - ${url}`}>
						<Icon symbolId='whatsapp-icon' size='small' />
					</Link>
				</li>
			</ul>
			<span className='tip'>Tip: tap the bullet to get new quote.</span>
		</section>
	)
}
export default Controls
