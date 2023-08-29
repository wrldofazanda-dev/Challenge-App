import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Logo
      </div>
      <div className={styles.links}>
        <a href="#services" className={styles.link}>Services</a>
        <a href="#industries" className={styles.link}>Industries</a>
        <a href="#cases" className={styles.link}>Cases</a>
        <a href="#contact" className={styles.link}>Contact</a>
      </div>
      <button className={styles.button}>Let's talk</button>
    </nav>
  );
};

export default Navbar;
