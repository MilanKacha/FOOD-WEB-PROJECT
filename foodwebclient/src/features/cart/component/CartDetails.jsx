import "../../../style/cartdetails.css";

import Mini from "../../../assests/fooditem/mini.avif";
import Button from "../../../ui/Button";

const CartDetails = () => {
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
          <div className="cartitem">
            <div className="cartitem-img">
              <img src={Mini} alt="" />
            </div>
            <div className="cartitem-description">
              <div className="cartitem-name">
                Family Feast - Non Veg @ Rs.490 off
              </div>
              <div className="cartitem-restorant">Laxmi burggur center</div>
              <select>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
              <div className="cartitem-price">₹319</div>
              <Button>Remove</Button>
            </div>
          </div>
          <div className="cartitem">
            <div className="cartitem-img">
              <img src={Mini} alt="" />
            </div>
            <div className="cartitem-description">
              <div className="cartitem-name">
                Family Feast - Non Veg @ Rs.490 off
              </div>
              <div className="cartitem-restorant">Laxmi burggur center</div>
              <div className="cartitem-price">₹319</div>
              <select>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
              <Button>Remove</Button>
            </div>
          </div>

          <div className="cartitem-subtotal">
            <div style={{ color: "black" }} className="subtotal">
              SubTotal: 3333 <span> / Total Item In Cart: 2</span>
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
