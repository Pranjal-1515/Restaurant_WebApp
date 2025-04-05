import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import './styles/header.css';
import './styles/footer.css';
import './styles/hero.css';
import './styles/menu.css';
import './styles/cart.css';
import './styles/reservation.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [reservations, setReservations] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <Router>
      <div className="app">
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home addReservation={addReservation} />} />
          <Route 
            path="/menu" 
            element={<Menu addToCart={addToCart} addReservation={addReservation} />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;