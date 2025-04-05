import '../styles/hero.css';

const HeroSection = ({ onReserveClick }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Flavour Heaven</h1>
        <p>Experience the finest culinary delights crafted with passion and perfection</p>
        <div className="hero-buttons">
          <a href="/menu" className="btn btn-primary">Explore Menu</a>
          <button 
            className="btn btn-secondary"
            onClick={onReserveClick}
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;