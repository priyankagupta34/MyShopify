import React from "react";
import { Utilities } from "./../Utilities";

export default function ShowFinalPriceInCart({
  cart,
  cards,
  setView,
  setAction
}) {
  setAction("Final Cart Price");
  const totalCart = Utilities.roundOff(
    Object.values(cart).reduce((a, v) => +v.finalNorPrice() + a, 0)
  );
  const amountToPay = Utilities.roundOff(
    Object.values(cart).reduce((a, v) => +v.finalDisPrice() + a, 0)
  );
  const totalDiscount = Utilities.roundOff(totalCart - amountToPay);

  return (
    <>
      <div className="cartDisplay">
        <div className="gridForPrice">
          <div className="grid">Total Cart</div>
          <div className="grid">Amount to Pay</div>
          <div className="grid">Discount Enjoyed</div>

          <div className="grid priceMart">Rs. {totalCart}</div>
          <div
            className="grid priceMart"
            style={{ color: "black", fontWeight: 800 }}
          >
            Rs. {amountToPay}
          </div>
          <div
            className="grid priceMart"
            style={{ color: "green", fontWeight: 800 }}
          >
            Rs. {totalDiscount}
          </div>
        </div>

        {/* Card Display */}
        <div className="paynow">
          {cards.map((card) => (
            <React.Fragment key={card.id}>
              <div>{card.name}</div>
              <div>{card.type}</div>
              <div>{card.card}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>
        <div className="actionInsCart">
          <button
            className="addToCart"
            onClick={() => setView(false, true, false)}
          >
            Back to Address
          </button>

          <button
            className="addToCart"
            onClick={() => setView(false, false, true)}
          >
            Pay Now
          </button>
        </div>
      </div>
    </>
  );
}
