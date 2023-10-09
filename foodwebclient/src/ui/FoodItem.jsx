import { Link, useNavigate } from "react-router-dom";
import "../../src/style/fooditem.css";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCartAsync,
  fetchItemsByUserIdAsync,
  selectItems,
  updateCartAsync,
} from "../features/cart/cartSlice";
import { selectUserInfo } from "../features/user/userSlice";
import { useEffect } from "react";
import { fetchItemsByUserId } from "../features/cart/cartApi";

const FoodItem = ({ product }) => {
  // ToDo when product fetch at this time user fetch repeatedly
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  console.log(user);
  const cartItems = useSelector(selectItems);

  const handeladdToCart = async () => {
    if (product) {
      const existingCartItemIndex = cartItems?.findIndex(
        (item) => item.product === product._id
      );

      if (existingCartItemIndex !== -1) {
        // If the product is already in the cart, increase its quantity
        const updatedItem = {
          ...cartItems[existingCartItemIndex],
          quantity: cartItems[existingCartItemIndex].quantity + 1,
        };
        await dispatch(
          updateCartAsync({
            id: updatedItem._id,
            quantity: updatedItem.quantity,
          })
        );
        // After successfully updating the cart, you can fetch the updated cart
        dispatch(fetchItemsByUserIdAsync());
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        const newItem = {
          product: product._id,
          quantity: 1,
          user: user._id,
        };
        await dispatch(addToCartAsync(newItem)); // Dispatch the action to add to cart
        // After successfully adding to the cart, you can fetch the updated cart
        dispatch(fetchItemsByUserIdAsync());
      }
    } else {
      console.error("Product is undefined or null");
    }
  };

  // Rest of your component code...

  return (
    <>
      <div className="fooditem">
        <div className="fooditem-wrapper">
          <div className="food-img">
            <img src={product.image} alt="" className="food-image" />
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
              <Button className="primary addtocart" onClick={handeladdToCart}>
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
