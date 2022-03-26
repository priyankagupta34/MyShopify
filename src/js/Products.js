import { useState } from "react";
import ProductActions from "./ProductActions";

export default function Products({
  products,
  changeproductQuantity,
  displayProductHandler,
  openProduct
}) {
  return (
    <div>
      {/* Showing Products */}
      <div className="showProds">
        {products.map((item) => (
          <div
            key={item.id}
            className="eachProd"
            onClick={() => displayProductHandler(item)}
          >
            <div className="ratingSection">
              {item.rating}{" "}
              <span
                style={{
                  fontSize: "1.2em",
                  color: `${
                    item.rating > 3
                      ? "green"
                      : item.rating < 2
                      ? "orange"
                      : "yellow"
                  }`
                }}
              >
                &#9733;
              </span>
            </div>
            <div className="eachProdThumbnail">
              <img src={item.thumbnail} alt={item.name} />
            </div>

            <div className="prodTitle">{item.title}</div>

            <div className="prodType">
              {item.brand} {item.category}
            </div>

            <div className="prodPrice">
              Rs. {item.price} &nbsp;
              <strike className="strikeprice">
                Rs.
                {(
                  item.price +
                  item.price * (item.discountPercentage / 100)
                ).toFixed(2)}
              </strike>{" "}
              &nbsp;
              <span className="discountDisplay">
                ({item.discountPercentage}% off)
              </span>
            </div>

            {/* All Action Buttons */}
            <ProductActions
              changeproductQuantity={changeproductQuantity}
              className="addCartActnsButtons"
              item={item}
            />
            {/* <div id="addToCart" className="addCartActnsButtons">
              <button
                className="addToCart"
                disabled={item.quantity !== 0}
                onClick={() => {
                  item.quantity++;
                  changeproductQuantity(item.id, item);
                }}
              >
                Add to Cart{" "}
                <span role="img" aria-label="" className="cartBtn">
                  &#128722;
                </span>
              </button>
              {item.quantity !== 0 ? (
                <div>
                  <span
                    className="minus"
                    onClick={() => {
                      item.quantity > 0 && item.quantity--;
                      changeproductQuantity(item.id, item);
                    }}
                  >
                    -
                  </span>
                  <span className="value">{item.quantity}</span>
                  <span
                    className="plus"
                    onClick={() => {
                      item.quantity++;
                      changeproductQuantity(item.id, item);
                    }}
                  >
                    +
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
