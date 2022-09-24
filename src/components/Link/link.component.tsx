import { FC, ReactNode } from 'react'
// TODO fix attributes object
type LinkProps = {
	children: ReactNode
	id?: string
	ext?: boolean
	url: string
}
const Link: FC<LinkProps> = ({ children, id, ext, url }) => {
	const attributes = {
		href: url,
		id,
		rel: 'noreferrer',
		target: '_blank',
	}
	if (!ext) {
		attributes.rel = ''
		attributes.target = ''
	}
	return <a {...attributes}>{children}</a>
}

export default Link
