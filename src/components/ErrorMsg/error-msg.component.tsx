import './error-msg.styles.scss'
import { FC } from 'react'

const ErrorMsg: FC<{ err: Error }> = ({ err }) => {
	console.log('Something went wrong: ', err.message)
	return (
		<article className='error'>
			<h2>Something went wrong.</h2>
			<p>Try again later.</p>
		</article>
	)
}
export default ErrorMsg
