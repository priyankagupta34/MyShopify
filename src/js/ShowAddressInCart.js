export default function ShowAddressInCart({
  setView,
  selectAddress,
  addresses,
  address
}) {
  return (
    <>
      <div className="cartDisplay">
        <div className="adGrid">
          {addresses.map((ad) => (
            <div key={ad.id} className="adBlock adGridEach">
               {" "}
              <input
                checked={ad.id === address?.id}
                type="radio"
                id={ad.id}
                name="address"
                value={address}
                onChange={(e) => selectAddress(e.target.value)}
              />
              <label htmlFor={ad.id}>
                <div className="adName">{ad.name}</div>
                <div className="adHouse">{ad.house}</div>
                <div className="adres">{ad.address}</div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="actionInsCart">
          <button
            className="addToCart"
            onClick={() => setView(true, false, false)}
          >
            Back to Cart
          </button>

          <button
            className="addToCart"
            disabled={!address}
            onClick={() => setView(false, true, false)}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
