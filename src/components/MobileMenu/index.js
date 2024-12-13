import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./mobile-menu.module.css"

const MobileMenu = ({ isOpen, onClose }) => (
  <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
    <button className={styles.closeButton} onClick={onClose}>×</button>
    <nav className={styles.nav}>
      <Link to="/" onClick={onClose}>Home</Link>
      <Link to="/about" onClick={onClose}>About</Link>
      <Link to="/portfolio" onClick={onClose}>Projects</Link>
      <Link to="/contact" onClick={onClose}>Contact</Link>
    </nav>
  </div>
)

export default MobileMenu
