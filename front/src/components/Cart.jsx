export default function Cart({ cartItems, onBuy, onRemove }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  {item.name} x {item.quantity}
                </div>
                <div>
                  ₹{item.price * item.quantity}
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total">Total: ₹{total}</div>
          <button onClick={onBuy}>Buy Now</button>
        </>
      )}
    </div>
  );
}
