export default function ProductCard({ product }) {
  return <article className="product-card">
    <img src={product.image} alt={product.name} /><div className="product-shade" />
    <div className="product-body"><h3>{product.name}</h3><p>{product.description}</p><div className="price"><small>₪</small>{product.price}</div></div>
  </article>
}
