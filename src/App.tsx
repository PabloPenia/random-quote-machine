import './theme/App.scss'
import QuoteBox from './components/QuoteBox/quote-box.component'
import Footer from './components/Footer/footer.component'
import { ApiResponse } from './types'
import useFetchData from './hooks/useFetchData'
import ErrorMsg from './components/ErrorMsg/error-msg.component'
import Loader from './components/Loader/loader.component'
import { useEffect, useState } from 'react'
import randomize from './components/utils/randomize'

const url =
	'https://gist.githubusercontent.com/PabloPenia/5ab0959cb76a92b0bab24c51dee5d065/raw/2a057c0241f48b621dc2129ddd1c174763453da6/quotes.json'

const App = () => {
	const [currentHue, setCurrentHue] = useState<string>(
		randomize(0, 360).toString(),
	)
	const [currentQuote, setCurrentQuote] = useState<number>(-1)

	const setHueProp = (val: string) =>
		document.documentElement.style.setProperty('--color__hue', val)

	const reRandomize = () => setCurrentHue(randomize(0, 360).toString())

	const api: ApiResponse = useFetchData(url)

	useEffect(() => {
		const matchHue =
			document.documentElement.style.getPropertyValue('--color__hue') ===
			currentHue

		if (api.data) setCurrentQuote(randomize(0, api.data.length - 1))

		if (!matchHue) setHueProp(currentHue)
	}, [currentHue, api.data])

	return (
		<>
			<main>
				{api.error && <ErrorMsg err={api.error} />}
				{api.isLoading && <Loader />}
				{api.data && currentQuote >= 0 && (
					<QuoteBox data={api.data[currentQuote]} randomize={reRandomize} />
				)}
			</main>
			<Footer />
		</>
	)
}

export default App
