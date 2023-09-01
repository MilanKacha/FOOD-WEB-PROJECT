import "../../src/style/fooditem.css";
import Button from "./Button";

const FoodItem = ({ item }) => {
  return (
    <>
      <div className="fooditem">
        <div className="fooditem-wrapper">
          <div className="food-img">
            <img src={item.img} alt="" />
          </div>
          <div className="food-content">
            <h3 style={{ color: "black" }}>
              {item.foodtitle}
              <span style={{ fontWeight: 400 }} className="food-rating">
                [4.9star (136-rating)]
              </span>
            </h3>
            <span className="food-price">₹190</span>

            <span className="food-quantity">
              2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun
            </span>
            <div className="food-button">
              <Button className="primary">Add To Cart</Button>
              <Button>Order Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
