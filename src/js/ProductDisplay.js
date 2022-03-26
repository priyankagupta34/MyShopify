import ProductActions from "./ProductActions";

export default function ProductDisplay({ product, changeproductQuantity }) {
  return (
    <div>
      <div className="ImagesSlider">
        <div className="arrowLeft">{"<"}</div>
        <img
          className="ImagesSliderImage"
          src={product?.images[0]}
          alt="product images"
        />
        <div className="arrowRight">{">"}</div>
      </div>

      <div className="prodPriceInDisplay">
        Rs. {product.price} &nbsp;
        <strike className="strikeprice">
          Rs.
          {(
            product.price +
            product.price * (product.discountPercentage / 100)
          ).toFixed(2)}
        </strike>{" "}
        &nbsp;
        <span className="discountDisplay">
          ({product.discountPercentage}% off)
        </span>
      </div>

      <div className="prodDescription">{product?.description}</div>

      {/* All Action Buttons */}
      <ProductActions
        changeproductQuantity={changeproductQuantity}
        item={product}
        className="prodDisplayActions"
      />
    </div>
  );
}
