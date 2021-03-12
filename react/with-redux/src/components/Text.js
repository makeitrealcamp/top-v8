import { useSelector } from 'react-redux'

function Text() {
  const { text, count } = useSelector(({ textReducer }) => ({
    text: textReducer.text,
    count: textReducer.count
  }))

  return <p>{count} {text}</p>
}

export default Text
