function Form({
  name,
  description,
  price,
  handleChange,
  createNewProduct,
}) {
  return (
    <form onSubmit={createNewProduct}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={name}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        onChange={handleChange}
        value={description}
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        id="price"
        onChange={handleChange}
        value={price}
      />
      <button
        type="submit"
      >
        Create
      </button>
    </form>
  );
}

export default Form
