function Product({ name, description, price }) {
  return (
    <article className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </article>
  )
}

export default Product
