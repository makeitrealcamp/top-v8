import { useSelector } from 'react-redux'
// import { connect } from 'react-redux'

// function Counter({ count }) {
function Counter() {
  const { count } = useSelector(state => ({
    count: state.countReducer.count,
  }))
  // console.log(props)
  return <p>{count}</p>
}

export default Counter
// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   }
// }

// export default connect(mapStateToProps)(Counter)
