import React from 'react'
import './Footer.css';
import {FaMapMarkerAlt,FaPhoneAlt,FaFax,FaEnvelope,FaGlobe}from 'react-icons/fa';
import logo from './../../assets/logo.png';


function Footer() {
  return (
    <footer id='footer'>
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull;Support</a>
            <a href="#">&bull;About</a>
            <a href="#">&bull;Learn</a>
            <a href="#">&bull;Hosting</a>
            <a href="#">&bull;Messenger</a>
          </div>
        </div>
        <div className="footer-box">
        <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull;Support</a>
            <a href="#">&bull;About</a>
            <a href="#">&bull;Learn</a>
            <a href="#">&bull;Hosting</a>
            <a href="#">&bull;Messenger</a>
        </div>
        </div>
        <div className="footer-box">
          <h4>Contact us</h4>
          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt/>&nbsp; Address: Kenya 
            </p>
            <p>
              <FaPhoneAlt/>&nbsp; Phone: +25473552367 
            </p>
            <p>
              <FaEnvelope/>&nbsp; Email: paul@gmail.com
            </p>
            <p>
              <FaFax/>&nbsp; FAX: +2543563773
            </p>
            <p>
              <FaGlobe/>&nbsp; Website: Xsocial.com
            </p>
          </div>
        </div> 
        <div className="footer-box">
          <img src={logo} alt="logo" />
          <p className="u-small text">
             &copy; copyright 2023.XSocial.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;