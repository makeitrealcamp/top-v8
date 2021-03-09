function Form({ handleSubmit, handleChange, email, password }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
