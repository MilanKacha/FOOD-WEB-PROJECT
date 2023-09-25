import "../../../style/cartdetails.css";
import Mini from "../../../assests/fooditem/mini.avif";
import Button from "../../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCartAsync,
  fetchItemsByUserIdAsync,
  selectItems,
  selectItemsByUserId,
  updateCartAsync,
} from "../cartSlice";
import { useEffect } from "react";

const CartDetails = () => {
  const cartByUserId = useSelector(selectItems);
  const dispatch = useDispatch();
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
                  <Button onClick={(e) => handelRemoveCart(e, item._id)}>
                    Remove
                  </Button>
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
          {/* Todo when check out page add ordernow */}
          <div className="cartitem-subtotal">Checkout</div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
