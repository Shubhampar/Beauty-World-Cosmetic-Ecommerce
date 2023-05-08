import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <div className="sb_footer-links-div">
            <h4>Company</h4>
            <a className="text-dark fs-4" href="../pages/AboutPage.jsx" target="_blank" rel="noreferrer">
            </a><p>About us</p>
            <a href="../pages/AboutPage.jsx"><p>Stores</p></a>
            <a href="../pages/AboutPage.jsx"><p>Careers</p></a>
            <a href="../pages/AboutPage.jsx"><p>Blog</p></a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Help</h4>
            <a className="text-dark fs-4" href="../pages/ContactPage.jsx" target="_blank" rel="noreferrer">
            </a><p>About us</p>
            <a href="../pages/ContactPage.jsx"><p>FAQ</p></a>
            <a href="../pages/ContactPage.jsx"><p>Contact</p></a>
            <a href="../pages/ContactPage.jsx"><p>Shipping</p></a>
            <a href="../pages/ContactPage.jsx"><p>Returns</p></a>
            <a href="../pages/ContactPage.jsx"><p>Gift Card</p></a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Coming Soon on</h4>
            <ul className="social-icons">
            <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
