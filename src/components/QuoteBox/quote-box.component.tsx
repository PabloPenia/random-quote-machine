import './quote-box.styles.scss'
import { KeyboardEvent, useState } from 'react'
import { QuoteData } from '~/types'
import { Button, Icon, Link } from '../common'

type QuoteBoxProps = {
	data: QuoteData
	randomize: () => void
}

const QuoteBox = ({ data, randomize }: QuoteBoxProps) => {
	// TODO add ref  on share button to handle click outside
	const [isOpen, setisOpen] = useState<boolean>(false)

	const { author, book, quote } = data
	const shareStr = `${quote} - ${author}${book && ', ' + data.book}`
	const url = window.location.href
	const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			randomize()
		}
	}
	return (
		<article className='quotebox'>
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
			<section className='controls'>
				<Button handleClick={randomize}>
					<Icon id='reload-icon' size='small' />
					<span>New Quote</span>
				</Button>
				<Button handleClick={() => setisOpen((prev) => !prev)}>
					<Icon id='share-icon' size='small' />
					<span>Share</span>
				</Button>
				<ul className={isOpen ? 'active' : undefined}>
					<li>
						<Link
							url={`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${shareStr}`}
							ext
						>
							<Icon id='facebook-icon' size='small' />
						</Link>
					</li>
					<li>
						<Link
							url={`https://twitter.com/intent/tweet?text=${shareStr}&url=${url}`}
							ext
						>
							<Icon id='twitter-icon' size='small' />
						</Link>
					</li>
					<li>
						<Link url={`https://wa.me/?text=${shareStr} - ${url}`} ext>
							<Icon id='whatsapp-icon' size='small' />
						</Link>
					</li>
				</ul>
				<span className='tip'>Tip: tap the bullet to get new quote.</span>
			</section>
		</article>
	)
}

export default QuoteBox
