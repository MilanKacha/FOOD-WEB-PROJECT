import { Link, useNavigate } from "react-router-dom";
import "../../src/style/fooditem.css";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAsync } from "../features/cart/cartSlice";
import { selectUserInfo } from "../features/user/userSlice";
import { useEffect } from "react";

const FoodItem = ({ product }) => {
  // ToDo when product fetch at this time user fetch repeatedly
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  const handeladdToCart = () => {
    // Check if product is defined before accessing its properties
    if (product) {
      const newItem = {
        product: product?._id,
        quantity: 1,
        user: user?._id,
      };
      dispatch(addToCartAsync(newItem));
    } else {
      console.error("Product is undefined or null");
    }
  };
  return (
    <>
      <div className="fooditem">
        <div className="fooditem-wrapper">
          <div className="food-img">
            <img src={product.image} alt="" />
          </div>
          <div className="food-content">
            <h3 style={{ color: "black" }}>
              {/* {item.foodtitle} */}
              <span className="food-rating">{product.itemname}</span>
            </h3>
            <span className="food-rating ">
              <span>{product.ratingsAverage} Stars</span> (94-rating)
            </span>
            <span className="food-price">₹ {product.price}</span>

            <span className="food-quantity">
              2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun
            </span>
            <div className="food-button">
              <Button className="primary" onClick={handeladdToCart}>
                Add To Cart
              </Button>

              <Button onClick={handeladdToCart}>Order Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
