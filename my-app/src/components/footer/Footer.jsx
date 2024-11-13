import './footer.css';
import facebookIcon from '../../img/facebook.svg';
import instagramIcon from '../../img/instagram.svg';
import inIcon from '../../img/in.svg';
import twitterIcon from '../../img/twitter.svg';

const Footer = () => {
    return (
        <section className="footer">
          
                <div className="footer__part1">
                    <div className="footer__socials">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={inIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter" />
                        </a>
                    </div>
                    <div className="footer__text">
                        <span>2024 Football teams</span>
                    </div>
                </div>
            
        </section>
    );
}

export default Footer;

