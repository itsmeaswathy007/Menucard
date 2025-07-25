import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { menuData } from "./data/menuData";
import MenuSection from "./components/MenuSection";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
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
    <Router>
      <div className="container">
        <div className="header">
          <h1> Restaurant Menu</h1>
          <button className="view-cart-button" onClick={() => setShowCart(!showCart)}>
            {showCart ? "Hide Cart" : "View Cart"}
          </button>
        </div>

        {/* Horizontal Menu Navigation with URLs */}
        <nav className="menu-nav">
          {Object.keys(menuData).map((category) => (
            <Link key={category} to={`/${category.toLowerCase()}`} className="menu-button">
              {category}
            </Link>
          ))}
        </nav>

        {/* Display selected category based on route */}
        <Routes>
          {Object.entries(menuData).map(([category, items]) => (
            <Route
              key={category}
              path={`/${category.toLowerCase()}`}
              element={
                <MenuSection
                  title={category}
                  items={items}
                  onAdd={handleAddToCart}
                  expanded={true}
                  onToggle={() => {}}
                />
              }
            />
          ))}
        </Routes>

        {showCart && (
          <Cart
            cartItems={cart}
            onBuy={handleBuy}
            onRemove={handleRemoveFromCart}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
