import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import "../../style/Products.css";
import ProductList from "./components/ProductList";
import { getProducts } from "../../api";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [discounted, setDiscounted] = useState([]);

  const populateProducts = async () => {
    const response = await getProducts();
    const newArray = response.filter((el) => {
      return el.discount;
    });
    console.log(response);
    console.log(newArray);
    setDiscounted(newArray);
    setProducts(response);
  };

  useEffect(() => {
    populateProducts();
  }, []);

  return (
    <div id="productsPageContainer">
      <p
        style={{
          fontSize: "20px",
          width: "600px",
          marginTop: "120px",
          textAlign: "center",
        }}
      >
        Welcome to our Store! Choose between many high-quality fitness items
        which will make you stronger and fitter than ever before!
      </p>
      <div id="productsPartContainer">
        <div id="discountedItemsContainer">
          <p className="containerTitles">Discounts!</p>
          <ProductList products={discounted} />
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
