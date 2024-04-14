import Product from "./Product";
import "../../../style/Products.css";

export default function ProductList({ products }) {
  return (
    <div className="grid-container">
      {products.map((element) => (
        <Product product={element} key={element.id} />
      ))}
    </div>
  );
}
