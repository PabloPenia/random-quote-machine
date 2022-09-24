import './quote-box.styles.scss'
import { FC } from 'react'
import Quote from './quote.component'
import { QuoteData } from '~/types'
import Controls from './controls.component'

type QuoteBoxProps = {
	data: QuoteData
	randomize: () => void
}

const QuoteBox: FC<QuoteBoxProps> = ({ data, randomize }) => {
	return (
		<article className='quotebox'>
			<Quote content={data} randomize={randomize} />
			<Controls
				randomize={randomize}
				share={function (): void {
					throw new Error('Function not implemented.')
				}}
			/>
		</article>
	)
}

export default QuoteBox
