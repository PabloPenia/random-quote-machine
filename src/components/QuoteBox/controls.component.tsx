import { FC } from 'react'
import Button from '../Button/button.component'
import Icon from '../Icon/icon.component'

type ControlsProps = {
	randomize: () => void
	share: () => void
}

const Controls: FC<ControlsProps> = ({ randomize, share }) => {
	return (
		<section>
			<div>
				<Button id='new-quote' handleClick={randomize}>
					<Icon symbolId='reload-icon' size='smaller' />
					<span>New Quote</span>
				</Button>
				<Button id='whatever' handleClick={share}>
					<Icon symbolId='share-icon' size='smaller' />
					<span>Share</span>
				</Button>
			</div>
			<span>Tip: tap the bullet to get new quote.</span>
		</section>
	)
}
export default Controls
