import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <p>Have a project in mind?</p>
          <p>22 Street Name, Suburb, 8000</p>
          <p>Cape Town, South Africa</p>
          <p>+27 21 431 0001</p>
          <p>enquire@website.co.za</p>
        </div>
        <div className={styles.links}>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Impressum</li>
          </ul>
        </div>
        <div className={styles.social}>
          <ul>
            <li>Facebook</li>
            <li>Github</li>
            <li>Youtube</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
