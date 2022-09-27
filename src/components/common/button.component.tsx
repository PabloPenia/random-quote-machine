import { ReactNode } from 'react'

/**
 * Props for {@link Button}.
 * @internal
 */
type ButtonProps = {
	/** ***Optional*** A name for the class */
	name?: string
	/** Components, HTML, etc */
	children: ReactNode
	/** Function or action to trigger */
	handleClick: () => void
}

/**
 * Renders a button around any content.
 * @param {ButtonProps} props
 * @category Component
 * @example A button with class
 * ```tsx
 * <Button name="myClass" handleClick={setState}>My Title</Button>
 * ```
 * ***renders:***
 * ```tsx
 * <button className="myClass" onClick={setState}>Change State</button>
 * ```
 * @example A button without class
 * ```tsx
 * <Button handleClick={setState}>
 * 	<Icon  />
 * 	<span>Change State</span>
 * </Button>
 * ```
 * ***renders:***
 * ```tsx
 * <button onClick={setState}>
 * 	<svg>...</svg>
 * 	<span>Change State</span>
 * </button>
 * ```
 */
export function Button({ handleClick, name, children }: ButtonProps) {
	return (
		<button className={name || undefined} onClick={handleClick}>
			{children}
		</button>
	)
}
