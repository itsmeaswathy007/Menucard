import "./App.css";
import { useState } from "react";
import { menuData } from "./data/menuData";
import MenuSection from "./components/MenuSection";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item, quantity) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleBuy = () => {
    alert("Order placed!");
    setCart([]);
    setShowCart(false);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Restaurant Menu</h1>
        <button
          className="view-cart-button"
          onClick={() => setShowCart(!showCart)}
        >
          {showCart ? "Hide Cart" : "View Cart"}
        </button>
      </div>

      <div className="menu-nav">
  {Object.keys(menuData).map((category) => (
    <button
      key={category}
      className={`menu-button ${activeSection === category ? "active" : ""}`}
      onClick={() =>
        setActiveSection((prev) => (prev === category ? null : category))
      }
    >
      {category}
    </button>
  ))}
</div>

{activeSection && (
  <MenuSection
    title={activeSection}
    items={menuData[activeSection]}
    onAdd={handleAddToCart}
    expanded={true}
    onToggle={() => setActiveSection(null)}
  />
)}

      {showCart && (
        <Cart
          cartItems={cart}
          onBuy={handleBuy}
          onRemove={handleRemoveFromCart}
        />
      )}
    </div>
  );
}

export default App;
