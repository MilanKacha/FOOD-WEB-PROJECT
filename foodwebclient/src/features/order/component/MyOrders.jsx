import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderByUserIdAsync, selectOrders } from "../orderSlice";
import "../../../style/myorder.css";

const MyOrders = () => {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrderByUserIdAsync());
  }, [dispatch]);

  return (
    <>
      <div className="order-wrapper">
        <div className="order-container">
          {orders.length > 1 ? (
            <h2 className="order-heading">Your Orders</h2>
          ) : (
            <h2 className="order-heading">Your Order</h2>
          )}
          {orders.map((item, index) => (
            <>
              <div className="order" key={index}>
                <div className="oredr-id">
                  <span> Order_Id:</span>
                  <span>{item._id},</span>
                </div>
                <div className="order-status">
                  <span></span>Status:<span>{item.status},</span>
                </div>
                <div className="total">
                  <span></span>TotalAmount:
                  <span>
                    {item.totalAmount} ({item.totalItems}
                    )items
                  </span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
