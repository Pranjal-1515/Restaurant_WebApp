import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Flavour Heaven</h3>
            <p>Experience culinary excellence with our diverse menu and exceptional service.</p>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><FaMapMarkerAlt /> 123 Food Street, Culinary City</li>
              <li><FaPhone /> (123) 456-7890</li>
              <li><FaEnvelope /> info@flavourheaven.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Opening Hours</h3>
            <ul>
              <li>Monday - Friday: 11am - 10pm</li>
              <li>Saturday: 10am - 11pm</li>
              <li>Sunday: 10am - 9pm</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Flavour Heaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;