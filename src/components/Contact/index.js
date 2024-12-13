import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./contact.module.css"

const Contact = () => {

  const scrollToSection = () => {
    const section = document.getElementById("hero")
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contactInfo {
            instagram {
              username
              url
            }
            bandName
          }
        }
      }
    }
  `)

  const { instagram, bandName } = data.site.siteMetadata.contactInfo

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Let's <span>connect</span> and<br />
          share <span>the music</span>
        </h2>
        
        <div className={styles.info}>
          <div>
            <h3>Contact Info</h3>
            <p>Instagram: <a href={instagram.url} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>{instagram.username}</a></p>
          </div>
        </div>
      </div>   
      <button className={styles.scrollToTop} onClick={scrollToSection}>
        ↑ Top
      </button>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} {bandName}. All rights reserved.</p>
      </footer>      
    </section>
  )
}

export default Contact 