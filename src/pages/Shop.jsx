import { useState } from "react";
import "../App.css";
import "../assets/bicycle_10";

const ShopPage = ({ products, addToCart }) => {
  const [error, setError] = useState("");

  const handleAddToCart = (product) => {
    try {
      addToCart(product);
      setError("");
    } catch (error) {
      setError("Failed to add item to cart. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="shop-page">
      <div className="shop-container">
        <h1 className="shop-title">Our Bicycles</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
