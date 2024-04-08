import Product from "./Product";

export default function ProductList({ products }) {
  return (
    <div>
      {products.map((element) => (
        <Product product={element} />
      ))}
    </div>
  );
}
