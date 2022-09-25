import './footer.styles.scss'
import Icon from '../Icon/icon.component'
import Link from '../Link/link.component'

const Footer = () => {
	return (
		<footer>
			<h2>Random Quote Machine</h2>
			<span>developed by</span>
			<Link ext={true} url='https://linkedin.com/in/PabloPenia'>
				Pablo Peña
			</Link>
			<Link ext={true} url='https://github.com/PabloPenia/random-quote-machine'>
				<Icon symbolId='github-icon' size='smaller' />
			</Link>
		</footer>
	)
}
export default Footer
