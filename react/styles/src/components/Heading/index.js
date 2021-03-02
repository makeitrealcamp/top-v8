function Heading({ light }) {
  const styles = {
    container: {
      padding: 20,
      backgroundColor: light ? 'yellowgreen' : 'lightblue',
    },
    title: {
      color: '#333',
    },
  }

  return (
    <header style={styles.container}>
      <h1 style={styles.title}>Hola mundo</h1>
    </header>
  )
}

export default Heading
