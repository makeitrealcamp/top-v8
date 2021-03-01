function Form({ title, body, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={handleChange}
        value={title}
      />
      <label htmlFor="body">Body</label>
      <textarea
        name="body"
        id="body"
        onChange={handleChange}
        value={body}
      />
      <button
        type="submit"
      >
        Create Post
      </button>
    </form>
  )
}

export default Form
