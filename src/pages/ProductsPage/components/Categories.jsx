import "../../../style/Products.css";
import Category from "./Category";

export default function Categories({
  categories,
  setChosenCategory,
  chosenCategory,
}) {
  return (
    <div id="categoriesContainer">
      <div id="categories">
        <p
          style={{
            fontSize: "18px",
            borderBottom: "1px solid white",
            paddingBottom: "3px",
          }}
        >
          Categories:
        </p>
        {categories.map((category) => (
          <Category
            category={category}
            setChosenCategory={setChosenCategory}
            chosenCategory={chosenCategory}
          />
        ))}
        {/* <div className="hideCategoriesButton">Hide categories</div> */}
      </div>
    </div>
  );
}
