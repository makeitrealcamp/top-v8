function About({ history, location, match }) {
  console.log(location)

  const handleClick = () => {
    history.goBack()
  }

  return (
    <>
      <h1>Hola {match.params.username || 'About'}</h1>
      <button type="button" onClick={handleClick}>go back</button>
    </>
  )
}

export default About
