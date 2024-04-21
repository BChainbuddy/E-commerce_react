import "../../../style/Products.css";

export default function Category({
  category,
  chosenCategory,
  setChosenCategory,
}) {
  const handleChooseCategory = () => {
    if (chosenCategory === category.id) {
      setChosenCategory("");
    } else {
      setChosenCategory(category.id);
    }
  };
  return (
    <div className="category" onClick={handleChooseCategory}>
      <div
        className={`circle ${
          category.id === chosenCategory ? `circleChosen` : ``
        }`}
      ></div>
      <p className="categoryName">{category.name}</p>
    </div>
  );
}
