import React, { useState } from "react";
import ShowAddressInCart from "./ShowAddressInCart";
import ShowFinalPriceInCart from "./ShowFinalPriceInCart";
import ShowProductsInCart from "./ShowProductsInCart";

export default function Cart({
  cart,
  setCartOpen,
  addresses,
  changeproductQuantity,
  productCount,
  setAction,
  cards
}) {
  const [
    cartProductsAddressPriceToDisplay,
    setcartProductsAddressPriceToDisplay
  ] = useState({
    productDisplay: true,
    addressDisplay: false,
    priceDisplay: false
  });

  const [address, selectAddress] = useState(null);

  if (productCount === 0) {
    return (
      <div className="continue">
        Happy Shopping!!!
        <span aria-label="smile" role="img">
          😊
        </span>
      </div>
    );
  }

  function setView(productDisplay, addressDisplay, priceDisplay) {
    setcartProductsAddressPriceToDisplay({
      productDisplay,
      addressDisplay,
      priceDisplay
    });
  }

  return (
    <div>
      {cartProductsAddressPriceToDisplay.productDisplay ? (
        <ShowProductsInCart
          cart={cart}
          setView={setView}
          setCartOpen={setCartOpen}
          changeproductQuantity={changeproductQuantity}
          setAction={setAction}
        />
      ) : (
        <></>
      )}

      {cartProductsAddressPriceToDisplay.addressDisplay ? (
        <ShowAddressInCart
          addresses={addresses}
          setView={setView}
          address={address}
          selectAddress={selectAddress}
          setAction={setAction}
        />
      ) : (
        <></>
      )}

      {cartProductsAddressPriceToDisplay.priceDisplay ? (
        <ShowFinalPriceInCart
          cart={cart}
          setView={setView}
          setAction={setAction}
          cards={cards}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
