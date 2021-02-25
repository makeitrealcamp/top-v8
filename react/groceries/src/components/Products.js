import Product from './Product'

function Products({ products }) {
  return (
    <section>
      {!!products && products.length > 0 && products.map(({
        _id,
        name,
        description,
        price
      }) => {
        return  (
          <Product
            key={_id}
            name={name}
            description={description}
            price={price}
          />
        )
      })}
    </section>
  )
}

export default Products
