export default function Done({ setNotificationMessage }) {
  return (
    <div className="done">
      <div style={{ color: "black" }}>SUCESS!!</div>
      <div>Your Order is Placed!!</div>
      <div>
        It will reach you by 7<sup>TH</sup> June
      </div>
      <button
        className="addToCart"
        onClick={() => setNotificationMessage(false)}
      >
        Continue Shopping
      </button>
    </div>
  );
}
