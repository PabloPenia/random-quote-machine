import { useState, useEffect } from 'react'
import { FaTwitter } from 'react-icons/fa'
import Button from './shared/Button'
import Link from './shared/Link'
import Quote from './Quote'

const QuoteBox = () => {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentQuote, setCurrentQuote] = useState([])
  const url =
    'https://gist.githubusercontent.com/PabloPenia/5ab0959cb76a92b0bab24c51dee5d065/raw/2a057c0241f48b621dc2129ddd1c174763453da6/quotes.json'
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setHasError(false)
      try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
        setIndex(Math.floor(Math.random() * json.length))
      } catch (error) {
        setHasError(true)
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])
  useEffect(() => {
    if (data.length > 0) {
      setCurrentQuote({
        author: data[index].author,
        avatar: data[index].avatar || false,
        book: data[index].book || false,
        text: data[index].quote,
      })
    }
  }, [data, index])
  const randomize = () => {
    setIndex(Math.floor(Math.random() * data.length))
  }
  return (
    <div id="quote-box">
      {hasError ? (
        <p className="error">
          Sorry we cannot connect with the quotes database
        </p>
      ) : isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <Quote content={currentQuote} />
          <section>
            <Button
              id="new-quote"
              text="Get new quote"
              handleClick={randomize}
            />
            <Link
              id="tweet-quote"
              ext={true}
              url="https://twitter.com/intent/tweet"
            >
              <FaTwitter />
            </Link>
          </section>
        </>
      )}
    </div>
  )
}

export default QuoteBox
