import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.css"

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logoContainer}>
          <StaticImage
            src="../images/logo/logo.PNG"
            alt="Logo"
            className={styles.logoImage}
            width={30}
            height={30}
          />
          <span className={styles.logoText}>SUN & MER</span>
        </Link>
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('works')}>Works</button>
          <button onClick={() => scrollToSection('posts')}>Post</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
