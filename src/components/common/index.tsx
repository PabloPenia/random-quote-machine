import './styles.scss'
import Sprite from '~/assets/sprite.svg'
import { ReactNode } from 'react'
//	? Common components: Button, ErrorMsg, Icon, Link and Spinner

/**
 * Props for {@link Button}
 */
type ButtonProps = {
	/** ClassName */
	className?: string
	/** Any type of React component. */
	children: ReactNode
	/** Button handler. Ussually a state setter */
	handleClick: () => void
}

/**
 * Renders a button around any number and types of elements.
 * @author Pablo Peña
 * @param {ButtonProps} props
 * @category Component
 * @example A button with class
 * ```tsx
 * <Button name="myClass" handleClick={setState}>Change State</Button>
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
function Button({ className, handleClick, children }: ButtonProps) {
	const attributes = {
		className,
		onClick: handleClick,
	}
	return <button {...attributes}>{children}</button>
}
/**
 * An error message.
 * @author Pablo Peña
 */
function ErrorMsg({ error }: { error: Error }) {
	console.log('Something went wrong: ', error.message)
	return (
		<article className='error'>
			<h2>Something went wrong.</h2>
			<p>Try again later.</p>
		</article>
	)
}
/** Props for {@link Icon} */
type IconProps = {
	/** Name of symbol Id from a svg sprite without the # */
	id: string
	/** a modifier for default className. Ussually for applying different sizing */
	size?: 'smaller' | 'small' | 'big' | 'bigger'
}
/**
 * Renders a responsive Icon from an SVG symbol.
 * Requires the icon className from Sass codebase: /SASS_ROOT/components/_icons.scss.
 * Requires an SVG Sprite with symbols.
 * Viewbox from symbol {@link id} should represent a square, otherwise styling is required.
 * Edit sizing: width = css width prop. height = css padding-top prop.
 * Some sizing presets for square viewbox can be setted through {@link size}
 * @author Pablo Peña
 * @param {IconProps} props
 * @category Component
 * @example A button with class
 * ```tsx
 * <Icon id="mySymbolId" />
 * <Icon id="mySymbolId" size="smaller" />
 * // renders
 * <span className="icon">
 * <svg>
 * 		<use xlinkHref="sprite.svg#mySymbolId" />
 * </svg>
 * </span>
 *
 * <span className="icon smaller">
 * 	<svg>
 * 		<use xlinkHref="sprite.svg#mySymbolId"  />
 * 	</svg>
 * </span>
 * ```
 */
function Icon({ id, size }: IconProps) {
	const classes = size ? 'icon ' + size : 'icon'
	return (
		<span className={classes}>
			<svg>
				<use xlinkHref={`${Sprite}#${id}`} />
			</svg>
		</span>
	)
}
/** Props for {@link Link} */
type LinkProps = {
	children: ReactNode
	className?: string
	/** if true returns target="_blank" and rel="noreferrer" */
	ext?: boolean
	url: string
}
/**
 * Renders an anchor around any type and number of React component(s)
 * @author Pablo Peña
 * @param {LinkProps} props
 * @category Component
 * @example
 * ```tsx
 *	<Link className="myClass" url="https://github.com" ext><Component /></Link>
 * <Link url="https://github.com"><Component /></Link>
 * // renders
 * <a href="https://github.com" className="myClass" target="_blank" rel="noreferrer"><Component /></a>
 * <a href="https://github.com"><Component /></a>
 * ```
 */
const Link = ({ children, className, ext, url }: LinkProps) => {
	const attributes = {
		href: url,
		className,
		rel: ext ? 'noreferrer' : undefined,
		target: '_blank' as string | undefined,
	}
	if (!ext) {
		attributes.rel = undefined
		attributes.target = undefined
	}
	return <a {...attributes}>{children}</a>
}
/**
 * Simple spinner for tell the user that something is loading
 * Requires styling from SASS_ROOT/components/spinner.styles.scss
 * @author Pablo Peña
 */
function Spinner() {
	return (
		<div className='spinner' aria-hidden={'true'}>
			<div></div>
		</div>
	)
}
export { Button, ErrorMsg, Icon, Link, Spinner }
