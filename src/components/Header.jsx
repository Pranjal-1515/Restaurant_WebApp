import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUtensils, FaBars, FaTimes } from 'react-icons/fa';
import Cart from './Cart';
import '../styles/header.css';

const Header = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <FaUtensils className="logo-icon" />
            <span>Flavour Heaven</span>
          </Link>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link to="#" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="#" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>

          <div className="header-actions">
            <button className="cart-btn" onClick={toggleCart}>
              <FaShoppingCart />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </button>

            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      <Cart 
        isOpen={isCartOpen} 
        onClose={toggleCart} 
        cartItems={cartItems} 
      />
    </header>
  );
};

export default Header;