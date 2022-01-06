const Link = ({ children, id, ext, url }) => {
  const attributes = {
    href: url,
    id: id,
    rel: 'noreferrer',
    target: '_blank',
  }
  if (!ext) {
    attributes.rel = false
    attributes.target = false
  }
  return <a {...attributes}>{children}</a>
}

export default Link
