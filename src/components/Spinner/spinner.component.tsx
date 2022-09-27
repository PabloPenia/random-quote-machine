import { ReactNode } from 'react'

/**
 * @internal props for {@link Loader}
 */
type LoaderProps = {
	/** The label */
	label: string
	/** The state */
	state: boolean
	/** Children */
	children: ReactNode
	/** The optional shit */
	type?: 'alert'
}

/**
 * This is just some kind of loader for load loadable stuff
 * @name Loader
 * @category Components
 */
export function Loader({ label, state, type, children }: LoaderProps) {
	const busy = state ? 'true' : 'false'
	const live = type ? 'assertive' : 'polite'
	return (
		<section aria-label={label} aria-busy={busy} aria-live={live}>
			<span className='sr-only' aria-label='Loading'>
				Loading...
			</span>
			<div className='spinner' aria-hidden={'true'}>
				<div></div>
			</div>
			{children}
		</section>
	)
}
