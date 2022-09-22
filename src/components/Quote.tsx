import { FC } from 'react'
import { QuoteData } from './QuoteBox'

type QuoteProps = {
	content: QuoteData
}
const Quote: FC<QuoteProps> = ({
	content: { quote, author, avatar, book },
}) => {
	return (
		<figure>
			<blockquote id='text'>{quote}</blockquote>
			<figcaption id='author'>
				<div>
					<p>{author}</p>
					{book && <cite>{book}</cite>}
				</div>
				{avatar && (
					<div
						className='avatar'
						style={{ backgroundImage: `url(${avatar})` }}
					/>
				)}
			</figcaption>
		</figure>
	)
}

export default Quote
