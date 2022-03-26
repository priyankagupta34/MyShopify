import React from "react";
import PriceChanger from "./PriceChanger";

export default function ShowProductsInCart({
  cart,
  changeproductQuantity,
  setCartOpen,
  setView,
  setAction
}) {
  setAction("Products In Cart");
  return (
    <>
      <div className="cartDisplay">
        <div className="cartProdDisplay">
          <div className="grid "></div>
          <div className="grid ">Product</div>
          <div className="grid ">Quantity</div>
          <div className="grid ">Price</div>
          {Object.values(cart).map((product) => (
            <React.Fragment key={product.id}>
              <div className="grid imgInCart">
                <img src={product.thumbnail} alt="product in cart" />
              </div>
              <div className="grid titleIncart">
                <small>{product.title}</small>
              </div>
              <div className="grid quantityIncart">
                {/* <small>{product.quantity}</small> */}
                <PriceChanger
                  item={product}
                  changeproductQuantity={changeproductQuantity}
                />
              </div>
              <div className="grid priceIncart">
                <div>
                  <small>Rs. {product.finalDisPrice()}</small>
                  <br />
                  <strike
                    style={{
                      fontSize: "0.7em",
                      color: "firebrick"
                    }}
                  >
                    (Rs. {product.finalNorPrice()}
                  </strike>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>
        <div className="actionInsCart">
          <button className="addToCart" onClick={() => setCartOpen(false)}>
            Continue Shopping
          </button>

          <button
            className="addToCart"
            onClick={() => setView(false, true, false)}
          >
            Proceed for Address
          </button>
        </div>
      </div>
    </>
  );
}
