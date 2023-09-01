import "../../style/ordercheckout.css";
import CartDetails from "../cart/CartDetails";
import UserDetailsUpdateForm from "../user/UserDetailsUpdateForm";
import UserDetails from "../user/UserDetails";

const OrderCheckOut = () => {
  return (
    <div className="ordercheckout-container">
      <div className="ordercheckout-wrapper">
        <div className="ordercheckout-personalinformation">
          <UserDetailsUpdateForm />
        </div>
        <div className="ordercheckout-userinfo">
          <h2 style={{ color: "black" }}>
            Shipping Address <span>(Choose from existing address)</span>
          </h2>

          <div className="userinfo-details-wrapper">
            <input
              name="address"
              // onChange={handelAddress}
              type="radio"
              //adress obj pass na thay html ma atle index
              // value={index}
            />
            <div className="userinfo-details">
              <span className="username">Name: Milan Kacha</span>
              <span className="useremail">Email: kachamilan108@gmail.com</span>
              <span className="userphone">Mo: 8758509206</span>
              <span className="userstreet">
                Address: Shakar, Bangalore, 360002, Gujarat,India
              </span>
            </div>
          </div>
          <div className="userinfo-details-wrapper">
            <input
              name="address"
              // onChange={handelAddress}
              type="radio"
              //adress obj pass na thay html ma atle index
              // value={index}
            />
            <div className="userinfo-details">
              <span className="username">Name: Milan Kacha</span>
              <span className="useremail">Email: kachamilan108@gmail.com</span>
              <span className="userphone">Mo: 8758509206</span>
              <span className="userstreet">
                Address: Shakar, Bangalore, 360002, Gujarat,India
              </span>
            </div>
          </div>
        </div>
        <div className="ordercheckout-paymentmethod"></div>
      </div>
      <CartDetails />
    </div>
  );
};

export default OrderCheckOut;
