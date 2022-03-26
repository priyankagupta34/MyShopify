import { useEffect, useState } from "react";
import "./styles.css";
import { ProductServices } from "./service";
import Products from "./js/Products";
import Cart from "./js/Cart";
import ProductDisplay from "./js/ProductDisplay";
import Done from "./js/Done";

export default function App() {
  const [products, setProds] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [cards, setCards] = useState([]);
  const [openCart, setCartOpen] = useState(false);
  const [openProduct, setProductOpen] = useState(false);
  const [currentAction, setAction] = useState("Products in Cart");
  const [cart, addCart] = useState({});
  const [product, selectProduct] = useState({});
  const [loader, setLoader] = useState(false);
  const [showNotificationMessage, setNotificationMessage] = useState(false);
  // const [messageContent, setMsgContent] = useState("");

  const [productCount, SetCartCount] = useState(0);

  // fetching product list
  useEffect(() => {
    (async () => {
      const pd = await ProductServices.fetchAllProducts();
      setProds(
        pd.data.products.map((a) => {
          a["quantity"] = 0;
          a["finalDisPrice"] = function () {
            return (
              (a["price"] - (a["price"] * a["discountPercentage"]) / 100) *
              a["quantity"]
            ).toFixed(2);
          };
          a["finalNorPrice"] = function () {
            return (a["price"] * a["quantity"]).toFixed(2);
          };
          return a;
        })
      );

      const ad = await ProductServices.fetchAllAddress();
      setAddresses(ad.data);

      const cd = await ProductServices.fetchAllCards();
      setCards(cd.data);
    })();
  }, []);

  // Updating Cart Value
  function changeproductQuantity(id, item) {
    if (item["quantity"] === 0) {
      delete cart[id];
      addCart({ ...cart });
    } else addCart({ ...cart, [id]: item });
  }

  // Keep a cart counter to show at cart
  useEffect(
    () => SetCartCount(Object.values(cart).reduce((a, v) => a + v.quantity, 0)),
    [cart]
  );

  function placeOrder(cart, address, cardSelected, amountToPay) {
    setLoader(true);
    console.log("final", cart, address, cardSelected, amountToPay);
    setTimeout(() => {
      setLoader(false);
      setCartOpen(false);
      setNotificationMessage(true);
      for (let i in cart) {
        cart[i].quantity = 0;
      }
      addCart({});
    }, 3000);
  }

  // Opening Modal For selected product
  function displayProductHandler(product) {
    setProductOpen(true);
    selectProduct(product);
  }

  return (
    <div className="app">
      {showNotificationMessage ? (
        <div id="loader">
          <Done setNotificationMessage={setNotificationMessage} />
        </div>
      ) : (
        <></>
      )}

      {loader ? (
        <div id="loader">
          <div className="outerLoader"></div>
        </div>
      ) : (
        <></>
      )}

      {openCart && (
        <div id="cart">
          <div className="cartService">
            <div>
              <span
                style={{ fontSize: "2em" }}
                role="img"
                aria-label=""
                className="cartBtn"
              >
                &#128722;
              </span>
              &nbsp; &nbsp;
              {currentAction}
            </div>
            <div onClick={() => setCartOpen(false)}>&times;</div>
          </div>

          <Cart
            cart={cart}
            setAction={setAction}
            setCartOpen={setCartOpen}
            addresses={addresses}
            changeproductQuantity={changeproductQuantity}
            productCount={productCount}
            cards={cards}
            placeOrder={placeOrder}
          />
        </div>
      )}

      {openProduct && (
        <div id="cart">
          <div className="cartService">
            <div>
              <div>{product?.title}</div>
              <div className="ratingSectionInProductDisplay">
                Rating <b style={{ color: "black" }}>{product?.rating}</b>{" "}
                &nbsp;
                <span
                  style={{
                    fontSize: "1.2em",
                    color: `${
                      product.rating > 3
                        ? "green"
                        : product.rating < 2
                        ? "orange"
                        : "yellow"
                    }`
                  }}
                >
                  &#9733;
                </span>
              </div>
            </div>
            <div onClick={() => setProductOpen(false)}>&times;</div>
          </div>

          <ProductDisplay
            product={product}
            changeproductQuantity={changeproductQuantity}
          />
        </div>
      )}

      <div className="title">
        <span className="titleWord">MyShopify</span>
        <span>
          <img
            src="shoplogo.png"
            alt="cart"
            className="cart"
            onClick={() => setCartOpen(true)}
          />
          <div className="count">{productCount}</div>
        </span>
      </div>

      <div className="shopContainer">
        <div className="shopInsider">
          <div id="product">
            <Products
              products={products}
              changeproductQuantity={changeproductQuantity}
              displayProductHandler={displayProductHandler}
              openProduct={openProduct}
            />
          </div>
        </div>
      </div>
      {/* <span className="copywrite" role="img" aria-label="emoji">
        ❤️ All Rights Reserved with Priyanka!! ❤️
      </span> */}
    </div>
  );
}
