import "../../../style/restorantmenu.css";
import FoodItem from "../../../ui/FoodItem";
import Mini from "../../../assests/fooditem/mini.avif";
import { useState } from "react";

const RestorantMenu = ({ ProductsByrestaurant }) => {
  // Filter food items based on 'showVegOnly' state
  const [showVegOnly, setShowVagOnly] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [activeProduct, setActiveProduct] = useState("");
  const filterProductByRestaurantShowInMenu = showVegOnly
    ? ProductsByrestaurant.filter((item) => item.isVegetarian)
    : ProductsByrestaurant;

  const filterProductByRestaurantId = ProductsByrestaurant.filter((product) => {
    // If showVegOnly is true, filter by vegetarian products
    if (showVegOnly && !product.isVegetarian) {
      return false;
    }
    // If selectedSubCategory is provided, filter by subcategory
    if (selectedSubCategory && product.subcategory !== selectedSubCategory) {
      return false;
    }
    // If activeProduct is provided, filter by activeProduct
    if (activeProduct && product.subcategory !== activeProduct) {
      return false;
    }
    // If the "Vegetarian Only" checkbox is clicked, remove activeProduct and selectedSubCategory filters
    if (showVegOnly) {
      return true;
    }
    // If none of the conditions above match, include the product
    return true;
  });

  const clearFilters = () => {
    setShowVagOnly(false);
    setSelectedSubCategory("");
    setActiveProduct("");
  };

  const handelClickSubCategory = (subcategory) => {
    setSelectedSubCategory(subcategory);
    setActiveProduct(subcategory);
  };

  // function for productSubCategories array (sidebar)
  const subcategoryCounts = {};
  // Calculate the counts of each subcategory
  filterProductByRestaurantShowInMenu.forEach((product) => {
    const { subcategory } = product;
    if (!subcategoryCounts[subcategory]) {
      subcategoryCounts[subcategory] = 1;
    } else {
      subcategoryCounts[subcategory]++;
    }
  });
  // Convert the object into an array of objects  // map return array
  const subcategoryArray = Object.keys(subcategoryCounts).map(
    (subcategory) => ({
      subcategory,
      count: subcategoryCounts[subcategory],
    })
  );

  return (
    <div className="restorantmenu-wrapper">
      <div className="restorant-item">
        <div className="restaurant-vegonly">
          <input
            type="checkbox"
            checked={showVegOnly}
            onClick={() => setShowVagOnly(!showVegOnly)}
          />
          <label>Show Veg Only:</label>
        </div>
        <span onClick={() => clearFilters()}>All Products</span>
        {subcategoryArray.map((item) => {
          return (
            <span
              className={item.subcategory === activeProduct ? "active" : ""}
              onClick={() => handelClickSubCategory(item.subcategory)}
            >
              {item.subcategory}({item.count})
            </span>
          );
        })}
      </div>
      <div className="restorant-menu">
        {filterProductByRestaurantId.map((product, index) => (
          <FoodItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RestorantMenu;
