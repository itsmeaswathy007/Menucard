import { useState } from "react";

export default function MenuItem({ item, onAdd }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <div className="menu-details">
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
      </div>
      <div className="menu-actions">
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={() => onAdd(item, quantity)}>Add</button>
      </div>
    </div>
  );
}
