import { FaCheckCircle } from 'react-icons/fa';
import '../styles/cart.css';

const OrderConfirmation = ({ cartItems, total, onClose }) => {
  return (
    <div className="order-confirmation">
      <div className="confirmation-icon">
        <FaCheckCircle />
      </div>
      <h3>Your Order is Placed!</h3>
      <p>Thank you for your purchase</p>
      
      <div className="order-summary">
        <h4>Order Summary</h4>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="order-total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button 
        className="btn btn-primary"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default OrderConfirmation;