import { useState } from "react";
import ProductActions from "./ProductActions";

export default function ProductDisplay({ product, changeproductQuantity }) {
  const [imgIdx, setImgIndex] = useState(0);

  return (
    <div>
      <div className="ImagesSlider">
        <button
          className=" arrow addToCart "
          disabled={imgIdx === 0}
          style={{ height: 40, width: 40, borderRadius: "50%" }}
          onClick={() => setImgIndex(imgIdx - 1)}
        >
          {"<"}
        </button>
        <img
          className="ImagesSliderImage "
          src={product?.images[imgIdx]}
          alt="product images"
        />
        <button
          className="arrow addToCart"
          disabled={imgIdx === product.images.length - 1}
          style={{ height: 40, width: 40, borderRadius: "50%" }}
          onClick={() => imgIdx < setImgIndex(imgIdx + 1)}
        >
          {">"}
        </button>
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

      <div className="prodPriceInDisplay">
        {product?.brand} {product?.category}
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
