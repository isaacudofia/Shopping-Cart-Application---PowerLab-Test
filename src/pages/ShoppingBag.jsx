import { useState } from "react";
import "../App.css";

const CartPage = ({
  cartItems,
  updateCartQuantity,
  removeFromCart,
  applyCoupon,
  discount,
  couponError,
}) => {
  const [couponCode, setCouponCode] = useState("");
  const [localError, setLocalError] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  const handleApplyCoupon = () => {
    try {
      setLocalError("");
      applyCoupon(couponCode);
    } catch (error) {
      setLocalError("Failed to apply coupon. Please try again.");
      console.error(error);
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    try {
      if (newQuantity < 1) return;
      updateCartQuantity(id, newQuantity);
      setLocalError("");
    } catch (error) {
      setLocalError("Failed to update quantity. Please try again.");
      console.error(error);
    }
  };

  const handleRemoveItem = (id) => {
    try {
      removeFromCart(id);
      setLocalError("");
    } catch (error) {
      setLocalError("Failed to remove item. Please try again.");
      console.error(error);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1 className="cart-title">Shopping Cart</h1>
          <div className="empty-cart">Your cart is empty</div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        {(localError || couponError) && (
          <div className="error-message">{localError || couponError}</div>
        )}

        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)} each</p>
              </div>
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  className="quantity-button"
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                  className="quantity-button"
                >
                  +
                </button>
              </div>
              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="coupon-section">
            <h3>Apply Coupon</h3>
            <div className="coupon-input-group">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                placeholder="Enter coupon code"
                className="coupon-input"
              />
              <button onClick={handleApplyCoupon} className="coupon-button">
                Apply
              </button>
            </div>
          </div>

          <div className="totals">
            <div className="subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
            {discount > 0 && (
              <div className="discount">
                Discount (13.2%): -${discountAmount.toFixed(2)}
              </div>
            )}
            <div className="total">Total: ${total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
