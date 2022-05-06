import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import PaymentBox from "./Payment";

const Cart = () => {
  const navigate = useNavigate();
  const handlClick = () => {
    navigate("/addressPage");
  };

  let data = JSON.parse(localStorage.getItem("cartData")) || [];
  return (
    <div>
      <div
        className="container border py-3"
        style={{ maxWidth: "1325px", position: "relative" }}
      >
        <div
          className="d-flex align-items-center justify-content-between mb-2"
          style={{ width: "65%" }}
        >
          <h2 className={styles.basket}>Basket</h2>
          <a href="">Delivery Options</a>
        </div>
        <div
          className="d-flex align-items-center justify-content-between py-3"
          style={{
            width: "65%",
            borderBottom: "1px solid #d3d3d3",
            borderTop: "1px solid #d3d3d3",
          }}
        >
          <div
            className={`d-flex justify-content-center align-items-center  ${styles.items}`}
          >
            <p className="my-0">Item</p>
          </div>
          <div
            className={`d-flex align-items-center justify-content-around ${styles.itemsPrice}`}
          >
            <p className="my-0">Item price</p>
            <p className="my-0">Quantity</p>
            <p className="my-0">Total Price</p>
          </div>
        </div>
        {data.map((item) => {
          return <CartItem data={data} key={item.id} ele={item} />;
        })}

        {/* <CartItem/> */}
        <PaymentBox clickMe={handlClick} title="PROCEED TO CHECKOUT" />
      </div>
    </div>
  );
};

export default Cart;
