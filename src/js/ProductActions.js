export default function ProductActions({
  changeproductQuantity,
  item,
  className
}) {
  return (
    <div
      id="addToCart"
      // className="addCartActnsButtons"
      className={`${className}`}
    >
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
      {item.quantity !== 0 ? (
        <div>
          <span
            className="minus"
            onClick={(e) => {
              e.stopPropagation();
              item.quantity > 0 && item.quantity--;
              changeproductQuantity(item.id, item);
            }}
          >
            -
          </span>
          <span className="value">{item.quantity}</span>
          <span
            className="plus"
            onClick={(e) => {
              e.stopPropagation();
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
    </div>
  );
}
