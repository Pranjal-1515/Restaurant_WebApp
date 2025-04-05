import { useState } from 'react';
import MenuSection from '../components/MenuSection';
import ReservationForm from '../components/ReservationForm';
import '../styles/menu.css';
import '../styles/reservation.css';

const Menu = ({ addToCart, addReservation }) => {
  const [showReservationForm, setShowReservationForm] = useState(false);

  const toggleReservationForm = () => {
    setShowReservationForm(!showReservationForm);
  };

  return (
    <div className="menu-page">
      <MenuSection addToCart={addToCart} />
      
      {showReservationForm && (
        <ReservationForm 
          onClose={toggleReservationForm} 
          addReservation={addReservation} 
        />
      )}
    </div>
  );
};

export default Menu;