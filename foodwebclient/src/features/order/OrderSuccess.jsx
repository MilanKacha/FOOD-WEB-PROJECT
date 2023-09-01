import "../../style/ordersuccess.css";

const OrderSuccess = () => {
  return (
    <>
      <div className="ordersuccess">
        <div className="ordersuccess-wrapper">
          <h2 style={{ color: "black" }} className="ordersuccess-heading">
            Thanks for your order
          </h2>
          <div className="orderdetails">
            <span className="orderid">Order ID:35467890</span>
            <span className="ordersuccess-text">
              You can check your Orders in my account My Order
            </span>
            <span style={{ color: "blue" }} className="ordersuccess-gotohome">
              Go to homepage
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
