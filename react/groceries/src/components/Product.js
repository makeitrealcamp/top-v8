function Product({ _id, name, description, price, deleteProduct }) {
  return (
    <article className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button
        type="button"
        onClick={deleteProduct(_id)}
      >
        Borrar
      </button>
    </article>
  )
}

export default Product
