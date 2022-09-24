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
	const str = `${data.quote} - ${data.author}${data.book && ', ' + data.book}`
	return (
		<article className='quotebox'>
			<Quote content={data} randomize={randomize} />
			<Controls randomize={randomize} quote={str} />
		</article>
	)
}

export default QuoteBox
