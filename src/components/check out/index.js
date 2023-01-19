import React, { useState, useContext } from "react";
import "./checkout.css";
import { cartContext } from "../../context/CartContextProvider";
import OrderDetails from "../orderDetails";
import "../modal/modal.css";

const Checkout = () => {
  const { state, dispatch } = useContext(cartContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setphone] = useState("");
  return (
    <div>
      <div className="checkoutBanner">
        <h1>Check Out</h1>
      </div>
      <div className="checkoutContainer">
        <div className="bilingDetails">
          <h3 className="billingHeader">BILLING DETAILS</h3>
          <div className="inputsContainer">
            <label>First Name</label>
            <input
              className="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputsContainer">
            <label>Last Name</label>
            <input
              className="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="inputsContainer">
            <label>Address</label>
            <input
              className="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="inputsContainer">
            <label>Phone</label>
            <input
              className="phone"
              type="number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
        </div>

        <div className="orderContainer">
          <div className="orderDetailsTable">
            <div className="headerColumn">
              <div className="headerRow">Your order Details</div>
            </div>
            <div className="column">
              <div className="productRow">Product</div>
              <div className="priceRow">Price</div>
              <div className="quantityRow">Quantity</div>
            </div>
            {state.selectedItems.map((order) => (
              <OrderDetails
                key={order.id}
                product={order.title}
                price={order.price}
                quantity={order.quantity}
              />
            ))}
            <div className="footeColumn">
              <div className="totalPriceRow">
                <span>Total Price:</span>
                {state.total} $
              </div>
            </div>
          </div>
          <button className="placeOrder">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
