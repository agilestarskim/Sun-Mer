import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./hero.module.css"

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.imageContainer}>
      <StaticImage
        src="../../images/hero/hero-main.jpg"
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