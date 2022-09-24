import { FC, KeyboardEvent } from 'react'
import { QuoteData } from '~/types'

type QuoteProps = {
	content: QuoteData
	randomize: () => void
}
const Quote: FC<QuoteProps> = ({ content, randomize }) => {
	const { quote, author, book } = content

	const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			randomize()
		}
	}
	return (
		<figure
			role={'button'}
			tabIndex={0}
			onClick={randomize}
			onKeyDown={handleKeyDown}
		>
			<blockquote>
				<h1>{quote}</h1>
			</blockquote>
			<figcaption id='author'>
				&mdash;{author}
				{book && <cite>{book}</cite>}
			</figcaption>
		</figure>
	)
}

export default Quote
