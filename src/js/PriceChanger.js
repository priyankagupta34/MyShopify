export default function PriceChanger({ item, changeproductQuantity }) {
  return (
    <>
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
    </>
  );
}
