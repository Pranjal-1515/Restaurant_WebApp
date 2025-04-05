import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import ReservationForm from '../components/ReservationForm';
import '../styles/hero.css';
import '../styles/menu.css';
import '../styles/reservation.css';

const Home = ({ addReservation }) => {
  const [showReservationForm, setShowReservationForm] = useState(false);

  const handleReserveClick = () => {
    setShowReservationForm(true);
  };

  const handleCloseForm = () => {
    setShowReservationForm(false);
  };

  return (
    <div className="home-page">
      <HeroSection onReserveClick={handleReserveClick} />
      
      <MenuSection addToCart={() => {}} />

      {showReservationForm && (
        <ReservationForm 
          onClose={handleCloseForm} 
          addReservation={addReservation} 
        />
      )}
    </div>
  );
};

export default Home;