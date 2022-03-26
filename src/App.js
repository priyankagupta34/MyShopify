import { useEffect, useState } from "react";
import "./styles.css";
import { ProductServices } from "./service";
import Products from "./js/Products";
import Cart from "./js/Cart";
import ProductDisplay from "./js/ProductDisplay";

export default function App() {
  const [products, setProds] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [openCart, setCartOpen] = useState(false);
  const [openProduct, setProductOpen] = useState(false);
  const [currentAction, setAction] = useState("Products in Cart");
  const [cart, addCart] = useState({});
  const [product, selectProduct] = useState({});

  // fetching product list
  useEffect(() => {
    (async () => {
      const pd = await ProductServices.fetchAllProducts();
      setProds(
        pd.data.products.map((a) => {
          a["quantity"] = 0;
          return a;
        })
      );

      const ad = await ProductServices.fetchAllAddress();
      setAddresses(ad.data);
    })();
  }, []);

  // Updating Cart Value
  function changeproductQuantity(id, item) {
    if (item["quantity"] === 0) {
      delete cart[id];
      addCart({ ...cart });
    } else addCart({ ...cart, [id]: item });
  }

  // Opening Modal For selected product
  function displayProductHandler(product) {
    setProductOpen(true);
    selectProduct(product);
  }
  console.log(addresses);
  return (
    <div className="app">
      {openCart && (
        <div id="cart">
          <div className="cartService">
            <div>{currentAction}</div>
            <div onClick={() => setCartOpen(false)}>&times;</div>
          </div>
          <Cart
            cart={cart}
            setAction={setAction}
            setCartOpen={setCartOpen}
            addresses={addresses}
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
    </div>
  );
}
