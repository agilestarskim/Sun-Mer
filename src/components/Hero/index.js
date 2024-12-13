import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./hero.module.css"
import Header from "../header"

const Hero = () => (
  <section id="hero" className={styles.hero}>
    <Header />
    <div className={styles.imageContainer}>
      <StaticImage
        src="../../images/hero/hero-main.JPG"
        alt="Hero"
        className={styles.heroImage}
        placeholder="blurred"
        layout="fullWidth"
        objectFit="cover"
      />
    </div>
  </section>
)

export default Hero 