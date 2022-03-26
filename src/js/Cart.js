import React, { useEffect, useState } from "react";
import ShowAddressInCart from "./ShowAddressInCart";
import ShowProductsInCart from "./ShowProductsInCart";

export default function Cart({ cart, setCartOpen, addresses }) {
  const [
    cartProductsAddressPriceToDisplay,
    setcartProductsAddressPriceToDisplay
  ] = useState({
    productDisplay: true,
    addressDisplay: false,
    priceDisplay: false
  });

  const [address, selectAddress] = useState(null);

  function setView(productDisplay, addressDisplay, priceDisplay) {
    setcartProductsAddressPriceToDisplay({
      productDisplay,
      addressDisplay,
      priceDisplay
    });
  }

  // useEffect(()=>{

  // })
  console.log("addres", address);
  return (
    <div>
      {cartProductsAddressPriceToDisplay.productDisplay ? (
        <ShowProductsInCart
          cart={cart}
          setView={setView}
          setCartOpen={setCartOpen}
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
        />
      ) : (
        <></>
      )}
    </div>
  );
}
