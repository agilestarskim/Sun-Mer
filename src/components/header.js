import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logoContainer}>
          <StaticImage
            src="../images/logo/logo.png"
            alt="Logo"
            className={styles.logoImage}
            width={30}
            height={30}
          />
          <span className={styles.logoText}>SUN & MER</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/works">Works</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button className={styles.menuButton}>Menu</button>
      </div>
    </header>
  )
}

export default Header
