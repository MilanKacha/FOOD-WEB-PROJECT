import "../../../style/ordercheckout.css";
import CartDetails from "../../cart/component/CartDetails";
import UserDetailsUpdateForm from "../../user/component/UserDetailsUpdateForm";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../user/userSlice";

const OrderCheckOut = () => {
  const user = useSelector(selectUserInfo);

  return (
    <div className="ordercheckout-container">
      <div className="ordercheckout-wrapper">
        <div className="ordercheckout-personalinformation">
          <UserDetailsUpdateForm />
        </div>
        {user && (
          <>
            <div className="ordercheckout-userinfo">
              <h2 style={{ color: "black" }}>
                Shipping Address <span>(Choose from existing address)</span>
              </h2>

              <div className="userinfo-details-wrapper">
                <div className="userinfo-details">
                  <span className="username">Name: {user.username}</span>
                  <span className="useremail">Email: {user.email}</span>
                  <span className="userphone">Mo: {user.phone}</span>
                  <span className="userstreet">
                    Address: {user.street}, {user.city}, {user.pincode},
                    {user.state},{user.country}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="ordercheckout-paymentmethod"></div>
      </div>
      <CartDetails />
    </div>
  );
};

export default OrderCheckOut;
