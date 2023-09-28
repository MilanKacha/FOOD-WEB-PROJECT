import "../../../style/cartdetails.css";
import Mini from "../../../assests/fooditem/mini.avif";
import Button from "../../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCartAsync,
  fetchItemsByUserIdAsync,
  resetCartAsync,
  selectItems,
  updateCartAsync,
} from "../cartSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { selectUserInfo } from "../../user/userSlice";
import { createOrderAsync } from "../../order/orderSlice";

const CartDetails = () => {
  const cartByUserId = useSelector(selectItems);
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location.pathname);
  useEffect(() => {
    dispatch(fetchItemsByUserIdAsync());
  }, [dispatch]);
  const totalAmount = cartByUserId.reduce(
    (amount, item) => item.product.price * item.quantity + amount,
    0
  );

  const totalItem = cartByUserId.reduce(
    (amount, item) => item.quantity + amount,
    0
  );

  const handelUpdateCart = (e, item) => {
    // + convert in string to int
    dispatch(updateCartAsync({ id: item._id, quantity: +e.target.value })).then(
      () => {
        // After successfully updating the cart, you can fetch the updated cart
        dispatch(fetchItemsByUserIdAsync());
      }
    );
  };

  const handelRemoveCart = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };

  // console.log(cartByUserId);

  const handelOrder = async () => {
    const order = {
      product: cartByUserId,
      totalAmount: totalAmount,
      totalItems: totalItem,
      user: user._id,
      selectedAddress: `${user.street}, ${user.city}, ${user.pincode}, ${user.state}, ${user.country}`,
    };
    await dispatch(createOrderAsync(order));
    await dispatch(resetCartAsync());
  };

  console.log(totalAmount);
  return (
    <>
      <div className="cart-container">
        <div className="cart-wrapper">
          <h2 style={{ color: "black" }} className="cart-heading">
            Cart
          </h2>
          <div style={{ color: "blue" }} className="cartitem-continueshopping">
            Continue Shopping
          </div>
          {cartByUserId.map((item, index) => (
            <>
              {/* {console.log(item)} */}
              <div className="cartitem" key={index}>
                <div className="cartitem-img">
                  <img src={item.product.image} alt="" />
                </div>
                <div className="cartitem-description">
                  <div className="cartitem-name">{item.product.itemname}</div>
                  <div className="cartitem-restorant">
                    {item.product.restorantname}
                  </div>
                  <select
                    onChange={(e) => handelUpdateCart(e, item)}
                    value={item.quantity}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <div className="cartitem-price">₹{item.product.price}</div>
                  {location.pathname === "/cart" && (
                    <Button onClick={(e) => handelRemoveCart(e, item._id)}>
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            </>
          ))}

          <div className="cartitem-subtotal">
            <div style={{ color: "black" }} className="subtotal">
              SubTotal: {totalAmount}
              <span> / Total Item In Cart: {totalItem}</span>
            </div>
          </div>

          {location.pathname === "/checkout" && (
            <Link to="/ordersucess">
              <Button className="cartitem-subtotal" onClick={handelOrder}>
                Place Order
              </Button>
            </Link>
          )}
          {location.pathname === "/cart" && (
            <Link to="/checkout">
              <Button className="cartitem-subtotal">Process to Buy</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDetails;
