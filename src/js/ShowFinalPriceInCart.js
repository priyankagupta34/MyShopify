import React, { useEffect } from "react";
import { Utilities } from "./../Utilities";

export default function ShowFinalPriceInCart({
  cart,
  cards,
  setView,
  setAction,
  placeOrder,
  cardSelected,
  selectCard,
  address
}) {
  useEffect(() => setAction("Final Cart Price"), []);
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
              <div className="card">
                <input
                  checked={cardSelected?.id === card.id}
                  type="radio"
                  id={card.id}
                  name="address"
                  onChange={(e) => selectCard(card)}
                />
              </div>

              <label htmlFor={card.id} className="card">
                <div style={{ color: "black", fontWeight: 600 }}>
                  {card.name}
                </div>
              </label>
              <label htmlFor={card.id} className="card">
                <div>
                  <div
                    style={{
                      color: `${
                        card.type === "Credit" ? "cornflowerblue" : "#2c982c"
                      }`,
                      fontWeight: 600
                    }}
                  >
                    {card.type}
                  </div>
                  <div>
                    {card.card} &nbsp;**** &nbsp;{card.card}{" "}
                  </div>
                </div>
              </label>
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
            disabled={cardSelected === null}
            onClick={() => placeOrder(cart, address, cardSelected, amountToPay)}
          >
            Pay Now
          </button>
        </div>
      </div>
    </>
  );
}
