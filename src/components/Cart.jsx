import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaTimes, FaTrash } from 'react-icons/fa';
import OrderConfirmation from './OrderConfirmation';
import '../styles/cart.css';

const Cart = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setIsOrderPlaced(true);
    toast.success('Order placed successfully!');
  };

  const handleCloseConfirmation = () => {
    setIsOrderPlaced(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <button className="close-cart" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="btn btn-primary" onClick={onClose}>
              Browse Menu
            </button>
          </div>
        ) : isOrderPlaced ? (
          <OrderConfirmation 
            cartItems={cartItems} 
            total={total} 
            onClose={handleCloseConfirmation} 
          />
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(index)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h3>Total: ${total.toFixed(2)}</h3>
            </div>

            <button 
              className="checkout-btn btn btn-primary"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;