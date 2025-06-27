import { useState } from "react";
import { productsData } from "./products.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header.jsx";
import AboutPage from "./pages/AboutUs.jsx";
import CartPage from "./pages/ShoppingBag.jsx";
import HomePage from "./pages/Home.jsx";
import ShopPage from "./pages/Shop.jsx";

import "./App.css";

const App = () => {
  const [products] = useState(productsData);
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  const addToCart = (product) => {
    try {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
      throw new Error("Failed to add item to cart");
    }
  };

  const updateCartQuantity = (id, newQuantity) => {
    try {
      if (newQuantity < 1) return;
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
      throw new Error("Failed to update quantity");
    }
  };

  const removeFromCart = (id) => {
    try {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
      throw new Error("Failed to remove item");
    }
  };

  const applyCoupon = (couponCode) => {
    try {
      const validCouponRegex = /^POWERLABSX$/i;
      if (validCouponRegex.test(couponCode.trim())) {
        setDiscount(0.132); // 13.2%
        setCouponError("");
      } else {
        setCouponError("Invalid coupon code. Please try again.");
        setDiscount(0);
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      throw new Error("Failed to apply coupon");
    }
  };

  const cartItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Router>
      <div className="app-container">
        <Header cartItemsCount={cartItemsCount} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/shop"
              element={<ShopPage products={products} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  updateCartQuantity={updateCartQuantity}
                  removeFromCart={removeFromCart}
                  applyCoupon={applyCoupon}
                  discount={discount}
                  couponError={couponError}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            {/* Fallback for unknown routes */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
