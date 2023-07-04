import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by SMF <FontAwesomeIcon icon={faSmile} className='smile' />
      </div>
      <div className="footer-icons">
        <a href="https://www.instagram.com/elfaiz_smail/" title='elfaiz_smail' ><FontAwesomeIcon icon={faInstagram} className="instagram-icon" /></a>
      </div>
    </footer>
  );
}

export default Footer;