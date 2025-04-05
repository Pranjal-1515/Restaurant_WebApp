import { useState } from 'react';
import MenuItem from './MenuItem';
import '../styles/menu.css';

const MenuSection = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
      price: 12.99,
      category: 'italian',
      isPopular: true
    },
    {
      id: 2,
      name: 'Chicken Tikka Masala',
      description: 'Grilled chicken chunks in spiced curry sauce',
      price: 14.99,
      category: 'indian',
      isPopular: true
    },
    {
      id: 3,
      name: 'Sushi Platter',
      description: 'Assorted fresh sushi with wasabi and soy sauce',
      price: 18.99,
      category: 'japanese',
      isPopular: false
    },
    {
      id: 4,
      name: 'Beef Burger',
      description: 'Juicy beef patty with cheese, lettuce, and special sauce',
      price: 10.99,
      category: 'american',
      isPopular: true
    },
    {
      id: 5,
      name: 'Pad Thai',
      description: 'Stir-fried rice noodles with eggs, tofu, and peanuts',
      price: 13.99,
      category: 'thai',
      isPopular: false
    },
    {
      id: 6,
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan with Caesar dressing',
      price: 9.99,
      category: 'salads',
      isPopular: false
    },
    {
      id: 7,
      name: 'Mushroom Risotto',
      description: 'Creamy Arborio rice with wild mushrooms and parmesan',
      price: 11.99,
      category: 'italian',
      isPopular: false
    },
    {
      id: 8,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a molten center, served with ice cream',
      price: 7.99,
      category: 'desserts',
      isPopular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'italian', name: 'Italian' },
    { id: 'indian', name: 'Indian' },
    { id: 'japanese', name: 'Japanese' },
    { id: 'american', name: 'American' },
    { id: 'thai', name: 'Thai' },
    { id: 'salads', name: 'Salads' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="menu-section">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <MenuItem 
              key={item.id} 
              item={item} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;