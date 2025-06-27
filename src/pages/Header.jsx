import "../App.css";
import { Link } from "react-router-dom";

const Header = ({ cartItemsCount }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-text">
            Isaac
          </Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/about" className="nav-link">
            ABOUT US
          </Link>
        </nav>
        <div className="cart">
          <Link to="/cart" className="cart-button">
            <span className="cart-icon">🛍️</span>
            <span>SHOPPING CART</span>
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
