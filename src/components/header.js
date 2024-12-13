import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import MobileMenu from "./MobileMenu"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoBox}>C</div>
            <Link to="/" className={styles.logo}>
              Sun&Mer
            </Link>
          </div>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
          <button 
            className={styles.bookCall}
            onClick={() => {}}
          >
            BOOK A CALL
            <span className={styles.arrow}>→</span>
          </button>
          <button 
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  )
}

export default Header
