import Link from './components/shared/Link'
import QuoteBox from './components/QuoteBox'
const App = () => {
  return (
    <main>
      <header>
        <h1>Random Quote Machine</h1>
      </header>

      <article>
        <QuoteBox />
      </article>
      <footer>
        <p>
          &copy; 2021{' '}
          <Link
            ext={true}
            url="https://linkedin.com/in/PabloPenia"
          >
            Pablo Peña
          </Link>
        </p>
        <p>
          Get the{' '}
          <Link
            ext={true}
            url="https://github.com/PabloPenia/random-quote-machine"
          >
            Source Code
          </Link>
        </p>
      </footer>
    </main>
  )
}

export default App
