import { Link, useNavigate } from "react-router-dom";
import "../../src/style/fooditem.css";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAsync } from "../features/cart/cartSlice";
import { selectUserInfo } from "../features/user/userSlice";
import { useEffect } from "react";
import { fetchLoggedInUserAsync } from "../features/user/userSlice";

const FoodItem = ({ product }) => {
  // console.log(product);
  const navigate = useNavigate();

  // ToDo when product fetch at this time user fetch repeatedly
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  useEffect(() => {
    dispatch(fetchLoggedInUserAsync());
  }, [dispatch]);
  // console.log(user);

  const handeladdToCart = (e) => {
    e.preventDefault();
    const newItem = {
      product: product._id,
      quantity: 1,
      user: user._id,
    };
    dispatch(addToCartAsync(newItem));
    navigate("/cart");
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
              <span style={{ fontWeight: 400 }} className="food-rating">
                [4.9star (136-rating)]
              </span>
            </h3>
            <span className="food-price">₹190</span>

            <span className="food-quantity">
              2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun
            </span>
            <div className="food-button">
              <Button className="primary" onClick={handeladdToCart}>
                Add To Cart
              </Button>

              <Link to="/order">
                <Button>Order Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
