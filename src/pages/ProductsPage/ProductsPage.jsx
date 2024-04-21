import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import "../../style/Products.css";
import ProductList from "./components/ProductList";
import { getCategories, getItemsByCategory, getProducts } from "../../api";
import Loader from "../../components/Loader";
import Categories from "./components/Categories";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [discounted, setDiscounted] = useState([]);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [chosenCategory, setChosenCategory] = useState("");

  const populateProducts = async () => {
    if (!chosenCategory) {
      const response = await getProducts();
      const newArray = response.filter((el) => {
        return el.discount;
      });
      if (response) {
        setDiscounted(newArray);
        setProducts(response);
      }
    } else {
      const response = await getItemsByCategory(chosenCategory);
      const newArray = response.filter((el) => {
        return el.discount;
      });
      if (response) {
        setDiscounted(newArray);
        setProducts(response);
      }
    }
  };

  const populateCategories = async () => {
    const response = await getCategories();
    if (response) {
      setCategories(response);
    }
  };

  useEffect(() => {
    populateProducts();
  }, [chosenCategory]);

  useEffect(() => {
    populateCategories();
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      {products.length && categories.length ? (
        <>
          <div id="productsPageContainer">
            <p
              style={{
                fontSize: "20px",
                width: "600px",
                marginTop: "120px",
                textAlign: "center",
              }}
            >
              Welcome to our Store! Choose between many high-quality fitness
              items which will make you stronger and fitter than ever before!
            </p>
            <div id="productsPartContainer">
              {discounted.length ? (
                <div id="discountedItemsContainer">
                  <p className="containerTitles">Discounts!</p>
                  <ProductList products={discounted} />
                </div>
              ) : (
                <></>
              )}
              <div id="allItemsContainer">
                <p className="containerTitles">Browse all items</p>
                <ProductList products={products} />
              </div>
            </div>
            <Footer />
          </div>
          {showTopBtn ? (
            <img
              height={40}
              width={40}
              className="toTop"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              src="data:image/png;base64,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"
              alt="arrowUp"
            />
          ) : (
            <></>
          )}
          <Categories
            categories={categories}
            setChosenCategory={setChosenCategory}
            chosenCategory={chosenCategory}
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
