import Product from './Product'

function Products({ products, deleteProduct }) {
  return (
    <section>
      {!!products && products.length > 0 ? products.map(({
        _id,
        name,
        description,
        price
      }) => {
        return  (
          <Product
            key={_id}
            _id={_id}
            name={name}
            description={description}
            price={price}
            deleteProduct={deleteProduct}
          />
        )
      }) : (
        <p>Create a new product</p>
      )}
    </section>
  )
}

export default Products
