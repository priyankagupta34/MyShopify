export default function Done({ setNotificationMessage }) {
  return (
    <div className="done">
      <div style={{ color: "black", fontWeight: 800 }}>SUCESS!!</div>
      <div>Your Order is Placed!!</div>
      <div>It will reach within XYZ business days!!</div>
      <button
        className="addToCart"
        onClick={() => setNotificationMessage(false)}
      >
        Continue Shopping
      </button>
    </div>
  );
}
