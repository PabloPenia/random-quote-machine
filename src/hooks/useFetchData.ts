import { useEffect, useState } from 'react'
import { ApiResponse } from '~/types'

const useFetchData = (url: string): ApiResponse => {
	const [status, setStatus] = useState<ApiResponse['status']>()
	const [statusText, setStatusText] = useState<ApiResponse['statusText']>()
	const [data, setData] = useState<ApiResponse['data']>()
	const [error, setError] = useState<ApiResponse['error']>()
	const [isLoading, setIsLoading] = useState<ApiResponse['isLoading']>(false)

	useEffect(() => {
		;(async () => {
			setIsLoading(true)
			setError(undefined)
			setData(undefined)
			try {
				const res = await fetch(url)
				const json = await res.json()
				setStatus(res.status)
				setStatusText(res.statusText)
				setData(json)
			} catch (error) {
				setError(error as Error)
			}
			setIsLoading(false)
		})()
	}, [url])

	return { status, statusText, data, error, isLoading }
}

export default useFetchData
