import PriceChanger from "./PriceChanger";

export default function ProductActions({
  changeproductQuantity,
  item,
  className
}) {
  return (
    <div id="addToCart" className={`${className}`}>
      <button
        className={`addToCart`}
        disabled={item.quantity !== 0}
        onClick={(e) => {
          e.stopPropagation();
          item.quantity++;
          changeproductQuantity(item.id, item);
        }}
      >
        Add to Cart{" "}
        <span role="img" aria-label="" className="cartBtn">
          &#128722;
        </span>
      </button>
      <PriceChanger item={item} changeproductQuantity={changeproductQuantity} />
    </div>
  );
}
