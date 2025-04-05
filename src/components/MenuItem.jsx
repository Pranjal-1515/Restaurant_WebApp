import { FaStar, FaCartPlus } from 'react-icons/fa';
import '../styles/menu.css';

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3>{item.name}</h3>
          {item.isPopular && <span className="popular-tag"><FaStar /> Popular</span>}
        </div>
        <p className="menu-item-description">{item.description}</p>
        <div className="menu-item-footer">
          <span className="price">${item.price.toFixed(2)}</span>
          <button 
            className="add-to-cart-btn"
            onClick={() => addToCart(item)}
          >
            <FaCartPlus /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;