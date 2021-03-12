import { useSelector, useDispatch } from 'react-redux'
import { changeText } from '../store/textReducer'

function TextArea() {
  const dispatch = useDispatch()
  const { text } = useSelector(state => ({
    text: state.textReducer.text,
  }))

  function handleChange(e) {
    const { value } = e.target
    dispatch(changeText(value))
  }

  return (
    <textarea
      onChange={handleChange}
      value={text}
    />
  )
}

export default TextArea
