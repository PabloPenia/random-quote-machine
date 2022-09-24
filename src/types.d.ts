export type QuoteData = {
	author: string
	avatar?: string
	book: string
	quote: string
}
export type ApiResponse = {
	status: number | undefined
	statusText: string | undefined
	data: QuoteData[] | undefined
	error: Error | undefined
	isLoading: boolean
}
