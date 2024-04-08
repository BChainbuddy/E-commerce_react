import { useState } from "react";
import Footer from "../../components/Footer";
import "../../style/Products.css";
import ProductList from "./components/ProductList";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  return (
    <div id="productsPageContainer">
      <div id="productsPartContainer">
        <div id="bestSellingItemContainer">
          <p className="containerTitles">Best selling items</p>
          <ProductList products={products} />
        </div>
        <div id="allItemsContainer">
          <p className="containerTitles">Browse all items</p>
          <ProductList products={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
