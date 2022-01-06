const Quote = ({
  content: { text, author, avatar, book },
}) => {
  return (
    <figure>
      <blockquote id="text">{text}</blockquote>
      <figcaption id="author">
        <div>
          <p>{author}</p>
          {book && <cite>{book}</cite>}
        </div>
        {avatar && (
          <div
            className="avatar"
            style={{ backgroundImage: `url(${avatar})` }}
            alt="Author"
          />
        )}
      </figcaption>
    </figure>
  )
}

export default Quote
