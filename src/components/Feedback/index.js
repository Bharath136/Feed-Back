import './index.css'

const Feedback = props => {
  const {resources} = props
  const {emojis, loveEmojiUrl} = resources

  const onFeed = () => (
    <div className="container">
      <div className="card-container">
        <img src={loveEmojiUrl} alt="love emoji" className="img" />
        <h1 className="heading">Thank You!</h1>
        <p className="description">We will use your feedback to --</p>
      </div>
    </div>
  )

  return (
    <div className="container">
      <div className="card-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="img-container">
          {emojis.map(each => (
            <li className="img-list">
              <button type="button" onClick={onFeed} className="button">
                <img src={each.imageUrl} alt={each.name} className="img" />
              </button>
              <p className="name">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Feedback
