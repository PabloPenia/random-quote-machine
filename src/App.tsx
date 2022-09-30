import './theme/App.scss'
import QuoteBox from './components/QuoteBox/quote-box.component'
import { ApiResponse } from './types'
import useFetchData from './hooks/useFetchData'
import { useEffect, useState } from 'react'
import { randomize } from './utils/functions'
import { ErrorMsg, Icon, Link, Spinner } from './components/common'

// TODO: create new app state to handle loading
//* then render first #app child only when is not loading, otherwise render loader/spinner
// TODO: Loader needs styling
const url =
	'https://gist.githubusercontent.com/PabloPenia/5ab0959cb76a92b0bab24c51dee5d065/raw/2a057c0241f48b621dc2129ddd1c174763453da6/quotes.json'
const defaultHue = randomize(0, 360, -1).toString()
const App = () => {
	const [currentHue, setCurrentHue] = useState<string>(defaultHue)
	// currentQuote = index on data array
	const [currentQuote, setCurrentQuote] = useState<number>(-1)
	// avoids re-randomize quote when hue needs multiple changes to match the requeriments
	const [reqNewQuote, setReqNewQuote] = useState<boolean>(true)
	// TODO: refactor next 2 functions to reusable functions on utils/functions
	const setHueProp = (val: string) =>
		document.documentElement.style.setProperty('--color__hue', val)

	const reRandomize = () =>
		setCurrentHue(randomize(0, 360, +currentHue).toString())

	const api: ApiResponse = useFetchData(url)
	/**
	 * Side-effects when: Data has changed or Hue property has changed
	 * to re-trigger by call: change Hue.
	 */
	useEffect(() => {
		if (api.data && reqNewQuote)
			setCurrentQuote(randomize(0, api.data.length - 1, currentQuote))

		const propHue =
			document.documentElement.style.getPropertyValue('--color__hue')

		if (propHue !== currentHue) {
			if (Math.abs(+propHue - +currentHue) < 50) {
				setReqNewQuote(false)
				reRandomize()
			} else {
				setReqNewQuote(true)
				setHueProp(currentHue)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentHue, api.data])

	return (
		<>
			<main>
				<Link
					//	TODO add and style this class
					className='github'
					url='https://github.com/PabloPenia/random-quote-machine'
					ext
				>
					<Icon id='github-icon' />
				</Link>
				{api.error && <ErrorMsg error={api.error} />}
				{api.isLoading && (
					//	TODO: Add <Wrapper /> instead of spinner only
					<div>
						<p>Wait, loading data...</p>
						<Spinner />
					</div>
				)}
				{api.data && currentQuote >= 0 && (
					<QuoteBox data={api.data[currentQuote]} randomize={reRandomize} />
				)}
				<footer>
					<h2>Random Quote Machine</h2>
					<span>developed by</span>
					<Link url='https://linkedin.com/in/PabloPenia' ext>
						Pablo Peña
					</Link>
				</footer>
			</main>
		</>
	)
}

export default App
