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
  console.log(orders);
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
                <div className="oredr-id">Order_Id:{item._id},</div>
                <div className="order-status">Status:{item.status},</div>
                <div className="total">
                  TotalAmount:{item.totalAmount} ({item.totalItems})items
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
