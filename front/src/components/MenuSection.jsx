// import MenuItem from "./MenuItem";

// export default function MenuSection({ title, items, onAdd, expanded, onToggle }) {
//   return (
//     <div className="menu-section">
//       <button className="menu-button" onClick={onToggle}>
//         {title}
//       </button>
//       {expanded && (
//         <div className="menu-items">
//           {items.map((item) => (
//             <MenuItem key={item.id} item={item} onAdd={onAdd} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from "react";

export default function MenuSection({ title, items, onAdd, expanded, onToggle }) {
  const [quantities, setQuantities] = useState({});

  const increase = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  return (
    <div className="menu-section">
      <button className="menu-button" onClick={onToggle}>
        {title}
      </button>
      {expanded && (
        <div className="menu-items">
          {items.map((item) => {
            const qty = quantities[item.id] || 1;

            return (
              <div className="menu-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="menu-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
                <div className="menu-actions">
                  <div className="quantity-controls">
                    <button onClick={() => decrease(item.id)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => increase(item.id)}>+</button>
                  </div>
                  <button onClick={() => onAdd(item, qty)}>Add</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
