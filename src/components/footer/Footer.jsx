import React from "react";
import "./Footer.scss";
import phone from "../../assets/phone.png"


const Footer = () => {
  return (
    <div className="footer">
        <div className="phone-container">
        <img src={phone} alt="phone"/>
        <a href="tel:+381645755999">064/575-5999</a>
      </div>
      <div className="footer-left">
        <p>E-Mail:</p>
        <a href="mailto:saso.milenov123@gmail.com">saso.milenov123@gmail.com</a>
      </div>
      <div className="footer-center">
        <p>Telefon:</p>
        <a href="tel:+381645755999">064/575-5999</a>
      </div>
      <div className="footer-right">
        <p>Radno vreme:</p>
        <p>Svakog dana od 9:00h do 18:00h</p>
      </div>
    </div>
  )

};

export default Footer;
