import React from "react";
import styles from "./PaymentBox.module.css";
 

const PaymentBox = (props) => {
 
  return (
    <div
      style={{ position: "absolute", width: "26%", top: "20px", right: "47px" }}
    >
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h2 className={styles.orderSummary}>Order Summary</h2>
       
      </div>
      <div className="border px-4 py-3">
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p>Subtotal</p>
          <p>$450</p>
        </div>
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p>Shipping</p>
          <p>TBD</p>
        </div>
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p>Estimated Tax</p>
          <p>$0.00</p>
        </div>
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p style={{ color: "black" }}>Total</p>
          <p style={{ color: "black" }}>$450</p>
        </div>
        <div>
          <button className={styles.button}  >{props.title}</button>
          <div className={`d-flex justify-content-center ${styles.payPal}`}>
            <img
              height="25px"
              src="https://www.anthropologie.com/static/v3/images/paypal-logo-ef75c426f33092b001a8a3d1a90d391f.svg"
              alt=""
            />
          </div>
        </div>

        <hr />

        <div className="accordion" id="accordionExample" >
          <div className="accordion-item" style={{border:"none"}}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{backgroundColor:"white",padding:"0rem 0.25rem"}}
              >
                Promo Code
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body d-flex align-items-center" style={{padding:"1rem 0.25rem"}}>
               <input className={styles.promoCode} type="text" />
               <button className={styles.applyBtn}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBox;