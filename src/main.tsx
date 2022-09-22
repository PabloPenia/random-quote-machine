import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootEl = document.getElementById('app')

if (!rootEl) throw new Error('Failed to find the root element.')

const root = ReactDOM.createRoot(rootEl as HTMLElement)

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
